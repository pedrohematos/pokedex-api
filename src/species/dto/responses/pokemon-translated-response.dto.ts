import { TranslationTypeEnum } from 'src/species/enums/translation-type.enum';

export class PokemonTranslatedResponseDto {
  name: string;
  description: string;
  translation: TranslationTypeEnum;
  habitat: string;
  isLegendary: boolean;
}
