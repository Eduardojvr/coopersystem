import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

var path = require('path');
var express = require('express')
var cors = require('cors')
var app = express()


async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  app.setGlobalPrefix('api'); // New
  const config = new DocumentBuilder()
    .setTitle('Endpoints')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('endpoints', app, document);
  
  await app.listen(3000);
}
bootstrap();



