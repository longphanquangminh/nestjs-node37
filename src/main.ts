import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8080);
}
bootstrap();

// yarn start
// yarn start:dev => nodemon

// eslint
// prettier

// main => module => controller => service

// yarn add @nestjs/config
