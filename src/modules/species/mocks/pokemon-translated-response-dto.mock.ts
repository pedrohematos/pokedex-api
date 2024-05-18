import { PokemonTranslatedResponseDto } from '../dtos/responses/pokemon-translated-response.dto';
import { TranslationTypeEnum } from '../enums/translation-type.enum';

export const PokemonTranslatedResponseDtoMock: PokemonTranslatedResponseDto = {
  name: 'bulbasaur',
  description: 'Translated description',
  habitat: 'forest',
  isLegendary: false,
  translation: TranslationTypeEnum.SHAKESPEARE,
};
