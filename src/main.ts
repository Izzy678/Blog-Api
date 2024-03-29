import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';


async function bootstrap() {

  config()
  
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
