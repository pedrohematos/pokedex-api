import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger('PokedexApi');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  await app.listen(process.env.APPLICATION_PORT);

  logger.log(
    `Application running on port ${process.env.APPLICATION_PORT} in ${process.env.NODE_ENV} mode`,
  );
}

bootstrap();
