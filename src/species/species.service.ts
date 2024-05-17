import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { removeControlCharacters } from 'src/utils/strings';
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
    try {
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
    } catch (error) {
      throw new Error('Failed to fetch translated species information');
    }
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
      throw new Error('Failed to fetch pokemon species information');
    }
  }

  private getPokemonDescription(pokemon: PokemonSpeciesApiResponse): string {
    const unprocessedDescription = pokemon?.flavor_text_entries?.find(
      (entry) => entry?.language?.name?.toLowerCase() === 'en',
    )?.flavor_text;

    return removeControlCharacters(unprocessedDescription);
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
      throw new Error('Failed to translate text');
    }
  }
}
