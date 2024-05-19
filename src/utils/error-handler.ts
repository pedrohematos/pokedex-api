import { HttpException, HttpStatus } from '@nestjs/common';

export function ThrowError(statusCode: HttpStatus, message: string) {
  throw new HttpException(
    {
      statusCode: statusCode,
      message: [message],
      error: HttpStatus[statusCode],
    },
    statusCode,
  );
}

export function ThrowErrors(statusCode: HttpStatus, message: string[]) {
  throw new HttpException(
    {
      statusCode: statusCode,
      message: message,
      error: HttpStatus[statusCode],
    },
    statusCode,
  );
}
