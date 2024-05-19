import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {
  @ApiProperty({
    description: 'The HTTP status code of the error response.',
  })
  statusCode: number;

  @ApiProperty({
    description:
      'An array of error messages providing more details about the error.',
    type: [String],
  })
  message: string[];

  @ApiProperty({
    description: 'A short description of the error type.',
  })
  error: string;
}
