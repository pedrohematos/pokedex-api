import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ThrowError } from 'src/utils/error-handler';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];

    if (!apiKey || apiKey !== process.env.API_KEY) {
      ThrowError(
        HttpStatus.UNAUTHORIZED,
        'Unauthorized access: Invalid or missing API key',
      );
    }

    return true;
  }
}
