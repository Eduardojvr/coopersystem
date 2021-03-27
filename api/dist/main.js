"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
var path = require('path');
var express = require('express');
var cors = require('cors');
var app = express();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors());
    app.setGlobalPrefix('api');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map