"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await typeorm_1.createConnection({
            type: 'mysql',
            host: 'us-cdbr-east-03.cleardb.com',
            port: 3306,
            username: 'bdb93ad9d478ca',
            password: 'c89e5c47',
            database: 'heroku_e59e25d160786b1',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map