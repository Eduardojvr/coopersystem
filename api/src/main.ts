import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import {createConnection} from "typeorm";
import {Usuario} from "./Entity/Usuario";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  createConnection({
    type: "mysql",
    host: "us-cdbr-east-03.cleardb.com",
    port: 3306,
    username: "bdb93ad9d478ca",
    password: "c89e5c47",
    database: "heroku_e59e25d160786b1",
    ssl: false,
    entities: [
      Usuario
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));

}
bootstrap();




