import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class PokemonNameParamDto {
  @ApiProperty({
    description: 'The name of the Pokémon species',
    example: 'pikachu',
  })
  @Matches(/^[a-zA-Z\s\-]+$/, {
    message: 'The name must only contain letters, spaces, or hyphens.',
  })
  @MaxLength(50, {
    message: 'The name must not be larger than 100 characters.',
  })
  @MinLength(1, { message: 'Please provide a name for the Pokémon.' })
  @IsString({ message: 'The name must be a string.' })
  name: string;
}
