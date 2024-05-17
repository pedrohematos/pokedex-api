import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

const logger = new Logger('PokedexApi');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setContact(
      'Pedro Matos',
      'https://pedromatos.me/',
      'pedrohematos@outlook.com',
    )
    .setTitle('Pokedex API')
    .setDescription('API for retrieving primary Pokémon information')
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', name: 'x-api-key', in: 'header' }, 'x-api-key')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APPLICATION_PORT);

  logger.log(
    `Application running on port ${process.env.APPLICATION_PORT} in ${process.env.NODE_ENV} mode`,
  );
}

bootstrap();
