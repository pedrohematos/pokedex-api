import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { PokemonResponseDto } from './dtos/responses/pokemon-response.dto';
import { PokemonTranslatedResponseDto } from './dtos/responses/pokemon-translated-response.dto';
import { SpeciesService } from './species.service';

@ApiTags('Species')
@ApiSecurity('x-api-key')
@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get(':name')
  @ApiOkResponse({
    type: PokemonResponseDto,
    description: 'Successfully retrieved Pokémon species information.',
  })
  @ApiOperation({
    summary: 'Retrieve Pokémon species information',
    description:
      'Retrieve detailed information about a specific Pokémon species by its name.',
  })
  async getPokemon(@Param('name') name: string): Promise<PokemonResponseDto> {
    return this.speciesService.findOne(name);
  }

  @Get(':name/translated')
  @ApiOkResponse({
    type: PokemonTranslatedResponseDto,
    description:
      'Successfully retrieved translated Pokémon species information.',
  })
  @ApiOperation({
    summary: 'Retrieve Pokémon species information with translated description',
    description:
      "Retrieve detailed information about a specific Pokémon species by its name, including a translated description. If the Pokémon's habitat is a cave or if the Pokémon is legendary, the description will be translated using Yoda style. Otherwise, it will be translated using Shakespeare style.",
  })
  async getTranslatedPokemon(
    @Param('name') name: string,
  ): Promise<PokemonTranslatedResponseDto> {
    return this.speciesService.findOneWithTranslation(name);
  }
}
