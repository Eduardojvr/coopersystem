import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

var express = require('express')
var cors = require('cors')
var app = express()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  await app.listen(3000);
}
bootstrap();



