import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { removeControlCharacters } from 'src/utils/strings';
import { PokemonResponseDto } from './dto/responses/pokemon-response.dto';
import { PokemonSpeciesApiReturn } from './interfaces/pokemon-species-api-return';

@Injectable()
export class SpeciesService {
  private pokeApiBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.pokeApiBaseUrl = this.configService.get<string>('POKEAPI_BASE_URL');
  }

  async findOne(name: string): Promise<PokemonResponseDto> {
    return this.getPokemonInfo(name);
  }

  async findOneWithTranslation(name: string): Promise<any> {
    return 'Implementing';
  }

  async getPokemonInfo(name: string): Promise<PokemonResponseDto> {
    const pokeApiUrl = `${this.pokeApiBaseUrl}/pokemon-species/${name.toLowerCase()}`;

    try {
      const pokemonData = await firstValueFrom(
        this.httpService
          .get<PokemonSpeciesApiReturn>(pokeApiUrl)
          .pipe(map((response) => response.data)),
      );

      const pokemon = {
        name: pokemonData.name,
        description: this.getPokemonDescription(pokemonData),
        habitat: pokemonData?.habitat?.name
          ? pokemonData.habitat.name
          : 'unknown',
        isLegendary: pokemonData?.is_legendary,
      };

      return pokemon;
    } catch (error) {}
  }

  private getPokemonDescription(pokemon: PokemonSpeciesApiReturn): string {
    const unprocessedDescription = pokemon.flavor_text_entries.find(
      (entry) => entry?.language?.name?.toLowerCase() === 'en',
    )?.flavor_text;

    const description = removeControlCharacters(unprocessedDescription);

    return description;
  }
}
