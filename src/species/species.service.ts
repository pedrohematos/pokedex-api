import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThrowError } from 'src/utils/error-handler';
import { normalizeTextFormatting } from 'src/utils/string-handler';
import { PokemonResponseDto } from './dto/responses/pokemon-response.dto';
import { PokemonTranslatedResponseDto } from './dto/responses/pokemon-translated-response.dto';
import { TranslationTypeEnum } from './enums/translation-type.enum';
import { PokemonSpeciesApiResponse } from './interfaces/pokemon-species-api-response';
import { TranslatedTextApiResponse } from './interfaces/translated-text-api-response';

@Injectable()
export class SpeciesService {
  private pokeApiBaseUrl: string;
  private funTranslationsBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.pokeApiBaseUrl = this.configService.get<string>('POKEAPI_BASE_URL');
    this.funTranslationsBaseUrl = this.configService.get<string>(
      'FUNTRANSLATIONS_BASE_URL',
    );
  }

  async findOne(name: string): Promise<PokemonResponseDto> {
    return this.getPokemonInfo(name);
  }

  async findOneWithTranslation(
    name: string,
  ): Promise<PokemonTranslatedResponseDto> {
    const pokemon = await this.getPokemonInfo(name);

    let translationType = TranslationTypeEnum.SHAKESPEARE;

    if (pokemon?.habitat?.toLowerCase() === 'cave' || pokemon.isLegendary) {
      translationType = TranslationTypeEnum.YODA;
    }

    const translatedDescription = await this.translateText(
      pokemon.description,
      translationType,
    );

    return {
      ...pokemon,
      description: translatedDescription,
      translation: translationType,
    };
  }

  private async getPokemonInfo(name: string): Promise<PokemonResponseDto> {
    const pokeApiUrl = `${this.pokeApiBaseUrl}/pokemon-species/${name.toLowerCase()}`;

    try {
      const pokemonData = await firstValueFrom(
        this.httpService
          .get<PokemonSpeciesApiResponse>(pokeApiUrl)
          .pipe(map((response) => response.data)),
      );

      const pokemon = {
        name: pokemonData.name,
        description: this.getPokemonDescription(pokemonData),
        habitat: pokemonData?.habitat?.name
          ? pokemonData.habitat.name.toLowerCase()
          : 'unknown',
        isLegendary: pokemonData?.is_legendary,
      };

      return pokemon;
    } catch (error) {
      const errorStatus = error.response.status;
      const errorData = error?.response?.data;

      if (errorStatus === HttpStatus.NOT_FOUND) {
        ThrowError(HttpStatus.NOT_FOUND, 'Pokemon not found.');
      } else {
        ThrowError(
          HttpStatus.INTERNAL_SERVER_ERROR,
          errorData
            ? `Failed to communicate with external API - ${errorData?.toString()}`
            : `Failed to communicate with external API`,
        );
      }
    }
  }

  private getPokemonDescription(pokemon: PokemonSpeciesApiResponse): string {
    const description = pokemon?.flavor_text_entries?.find(
      (entry) => entry?.language?.name?.toLowerCase() === 'en',
    )?.flavor_text;

    return normalizeTextFormatting(description);
  }

  private async translateText(
    text: string,
    translationType: TranslationTypeEnum,
  ): Promise<string> {
    const translationUrl = `${this.funTranslationsBaseUrl}/translate/${translationType}.json`;

    try {
      const translationData = await firstValueFrom(
        this.httpService
          .post<TranslatedTextApiResponse>(translationUrl, { text })
          .pipe(map((response) => response.data)),
      );

      return translationData?.contents?.translated;
    } catch (error) {
      const errorMessage = error?.response?.data?.error?.message;

      ThrowError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        errorMessage
          ? `Failed to communicate with external API - ${errorMessage}`
          : 'Failed to communicate with external API.',
      );
    }
  }
}
