"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const usuario_entity_1 = require("./usuario.entity");
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
const jwt_auth_guard_1 = require("../../auth/shared/jwt-auth.guard");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async tipoUsuario() {
        return this.usuarioService.tiposUsuario();
    }
    async cadastrar(usuario) {
        return this.usuarioService.cadastrar(usuario);
    }
    async atualizar(usuario) {
        console.log(usuario);
        return this.usuarioService.atualizar(usuario);
    }
    async listar() {
        return this.usuarioService.listar();
    }
    async meuUsuario(usuario) {
        return this.usuarioService.getsuario(usuario.query.usuario);
    }
    async gerar(usuario) {
        const user = await this.usuarioService.getsuario(usuario.query.usuario);
        user.senha = Math.random().toString(36).slice(-10);
        this.usuarioService.atualizar(user);
        var nodemailer = require('nodemailer');
        var remetente = nodemailer.createTransport({
            host: 'coopersystemsmtp@gmail.com',
            service: 'coopersystemsmtp@gmail.com',
            port: 587,
            secure: true,
            auth: {
                user: 'coopersystemsmtp@gmail.com',
                pass: 'smtpcooper'
            }
        });
        var emailASerEnviado = {
            from: 'coopersystemsmtp@gmail.com',
            to: user.usuario,
            subject: 'Sua nova senha',
            text: 'Esta é sua nova senha: ' + user.senha,
        };
        if (user) {
            remetente.sendMail(emailASerEnviado, function (error) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Email enviado!');
                }
            });
        }
        return "Email enviado!";
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtGuard),
    common_1.Get('/tipoUsuario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "tipoUsuario", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtGuard),
    common_1.Post('/cadastrar'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "cadastrar", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtGuard),
    common_1.Post('/atualizar'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "atualizar", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtGuard),
    common_1.Get('/listar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "listar", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtGuard),
    common_1.Get('/meuUsuario'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "meuUsuario", null);
__decorate([
    common_1.Get('/gerar'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "gerar", null);
UsuarioController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map