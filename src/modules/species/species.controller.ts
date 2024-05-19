import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorResponse } from '../../dtos/responses/error-response.dto';
import { PokemonNameParamDto } from './dtos/requests/pokemon-name-param.dto';
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
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    type: ErrorResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    type: ErrorResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    type: ErrorResponse,
  })
  @ApiOperation({
    summary: 'Retrieve Pokémon species information',
    description: `Retrieve detailed information about a specific Pokémon species by its name, including a treatment process to normalize the description text. The treatment process follows these rules:

      - Page breaks are treated just like newlines.
      - Soft hyphens followed by newlines vanish.
      - Letter-hyphen-newline becomes letter-hyphen, to preserve real hyphenation.
      - Any other newline becomes a space.`,
  })
  async getPokemon(
    @Param() { name }: PokemonNameParamDto,
  ): Promise<PokemonResponseDto> {
    return this.speciesService.findOne(name);
  }

  @Get(':name/translated')
  @ApiOkResponse({
    type: PokemonTranslatedResponseDto,
    description:
      'Successfully retrieved translated Pokémon species information.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    type: ErrorResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    type: ErrorResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    type: ErrorResponse,
  })
  @ApiOperation({
    summary: 'Retrieve Pokémon species information with translated description',
    description:
      "Retrieve detailed information about a specific Pokémon species by its name, including a translated description. If the Pokémon's habitat is a cave or if the Pokémon is legendary, the description will be translated using Yoda style. Otherwise, it will be translated using Shakespeare style. Prior to translation, the description undergoes normalization as part of the GET /species/{name} endpoint.",
  })
  async getTranslatedPokemon(
    @Param() { name }: PokemonNameParamDto,
  ): Promise<PokemonTranslatedResponseDto> {
    return this.speciesService.findOneWithTranslation(name);
  }
}
