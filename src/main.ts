import { Logger, ValidationPipe } from '@nestjs/common';
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
    .setDescription(
      '## Description 📄\n\n' +
        'The Pokedex API is an API for retrieving primary Pokémon information. It allows you to obtain detailed data about Pokémon species, including a translated description into specific styles like Yoda and Shakespeare.\n\n' +
        'This application was built using [Node.js](https://nodejs.org/), [NestJS](https://nestjs.com/), and [TypeScript](https://www.typescriptlang.org/).\n\n' +
        '## Dependencies 📦\n\n' +
        'The Pokedex API depends on the following external APIs:\n\n' +
        '- [PokeAPI](https://pokeapi.co/): Used to fetch Pokémon species information.\n' +
        '- [FunTranslations API](https://api.funtranslations.com): Used to translate Pokémon descriptions into specific styles (Yoda and Shakespeare).',
    )
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', name: 'x-api-key', in: 'header' }, 'x-api-key')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.APPLICATION_PORT);

  logger.log(
    `Application running on port ${process.env.APPLICATION_PORT} in ${process.env.NODE_ENV} mode`,
  );
}

bootstrap();
