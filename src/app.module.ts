import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { SpeciesModule } from './species/species.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'homolog', 'production')
          .required(),

        APPLICATION_PORT: Joi.number().required(),

        POKEAPI_BASE_URL: Joi.string().uri().required(),
        FUNTRANSLATIONS_BASE_URL: Joi.string().uri().required(),
      }),
    }),

    SpeciesModule,
  ],
})
export class AppModule {}
