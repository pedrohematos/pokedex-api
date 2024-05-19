import { ApiProperty } from '@nestjs/swagger';

class ErrorResponseDetail {
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

export class ErrorResponse {
  @ApiProperty({
    description:
      'Detailed information about the error, including status code, messages, and error type.',
    type: ErrorResponseDetail,
  })
  erro: ErrorResponseDetail;

  @ApiProperty({
    description: 'The HTTP status code of the overall error response.',
  })
  statusCode: number;
}
