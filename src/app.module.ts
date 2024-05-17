import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'homolog', 'production')
          .required(),

        APPLICATION_PORT: Joi.number().required(),
      }),
    }),
  ],
})
export class AppModule {}
