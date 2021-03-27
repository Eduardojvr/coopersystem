"use strict";
exports.__esModule = true;
exports.usuarioProviders = void 0;
var usuario_entity_1 = require("./usuario.entity");
var tipoUsuario_entity_1 = require("./tipoUsuario.entity");
exports.usuarioProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: function (connection) { return connection.getRepository(usuario_entity_1.Usuario); },
        inject: ['DATABASE_CONNECTION']
    },
    {
        provide: 'TIPOUSUARIO_REPOSITORY',
        useFactory: function (connection) { return connection.getRepository(tipoUsuario_entity_1.TipoUsuario); },
        inject: ['DATABASE_CONNECTION']
    },
];
