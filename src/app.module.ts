import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import * as Joi from 'joi';
import { ApiKeyGuard } from './guards/api-key.guard';
import { SpeciesModule } from './species/species.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'homolog', 'production')
          .required(),

        APPLICATION_PORT: Joi.number().required(),

        API_KEY: Joi.string().uuid().required(),

        POKEAPI_BASE_URL: Joi.string().uri().required(),
        FUNTRANSLATIONS_BASE_URL: Joi.string().uri().required(),
      }),
    }),

    SpeciesModule,
  ],

  providers: [
    {
      //Apply ApiKeyGuard to all routes
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    },
  ],
})
export class AppModule {}
