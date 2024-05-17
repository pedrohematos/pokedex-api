import { Controller, Get, Param } from '@nestjs/common';
import { SpeciesService } from './species.service';

@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get(':name')
  async getPokemon(@Param('name') name: string): Promise<any> {
    return this.speciesService.findOne(name);
  }

  @Get(':name/translated')
  async getTranslatedPokemon(@Param('name') name: string): Promise<any> {
    return this.speciesService.findOneWithTranslation(name);
  }
}
