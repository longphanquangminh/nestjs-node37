import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // định vị đường dẫn load tài nguyên
  app.use(express.static('.'));

  const config = new DocumentBuilder()
    .setTitle('Node 37')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  await app.listen(8080);
}
bootstrap();

// yarn start
// yarn start:dev => nodemon

// eslint
// prettier

// main => module => controller => service

// yarn add @nestjs/config

// yarn add @types/multer

// yarn add @nestjs/swagger swagger-ui-express
