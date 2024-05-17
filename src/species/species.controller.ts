import { Controller, Get, Param } from '@nestjs/common';
import { PokemonResponseDto } from './dto/responses/pokemon-response.dto';
import { PokemonTranslatedResponseDto } from './dto/responses/pokemon-translated-response.dto';
import { SpeciesService } from './species.service';

@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get(':name')
  async getPokemon(@Param('name') name: string): Promise<PokemonResponseDto> {
    return this.speciesService.findOne(name);
  }

  @Get(':name/translated')
  async getTranslatedPokemon(
    @Param('name') name: string,
  ): Promise<PokemonTranslatedResponseDto> {
    return this.speciesService.findOneWithTranslation(name);
  }
}
