import { ApiProperty } from '@nestjs/swagger';
import { TranslationTypeEnum } from 'src/modules/species/enums/translation-type.enum';

export class PokemonTranslatedResponseDto {
  @ApiProperty({ description: 'The name of the Pokémon', example: 'ivysaur' })
  name: string;

  @ApiProperty({
    description: 'A brief description of the Pokémon',
    example: `At which hour the bulb on its back grows large, it appears to loseth the ability to standeth on its hind forks.`,
  })
  description: string;

  @ApiProperty({
    description: 'The type of translation used for the Pokémon description',
    enum: TranslationTypeEnum,
    example: TranslationTypeEnum.SHAKESPEARE,
  })
  translation: TranslationTypeEnum;

  @ApiProperty({
    description: 'The habitat where the Pokémon is commonly found',
    example: 'grassland',
  })
  habitat: string;

  @ApiProperty({
    description: 'Indicates whether the Pokémon is legendary or not',
    example: false,
  })
  isLegendary: boolean;
}
