"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioProviders = void 0;
const usuario_entity_1 = require("./usuario.entity");
const tipoUsuario_entity_1 = require("./tipoUsuario.entity");
exports.usuarioProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(usuario_entity_1.Usuario),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'TIPOUSUARIO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(tipoUsuario_entity_1.TipoUsuario),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=usuario.providers.js.map