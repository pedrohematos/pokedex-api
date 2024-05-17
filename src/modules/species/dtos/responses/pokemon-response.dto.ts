import { ApiProperty } from '@nestjs/swagger';

export class PokemonResponseDto {
  @ApiProperty({ description: 'The name of the Pokémon', example: 'ivysaur' })
  name: string;

  @ApiProperty({
    description: 'A brief description of the Pokémon',
    example:
      'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
  })
  description: string;

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
