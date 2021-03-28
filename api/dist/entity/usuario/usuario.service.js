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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository, tipoUsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
        this.tipoUsuarioRepository = tipoUsuarioRepository;
    }
    async listar() {
        return this.usuarioRepository.find();
    }
    async tiposUsuario() {
        return this.tipoUsuarioRepository.find();
    }
    async cadastrar(usuario) {
        return this.usuarioRepository.save(usuario);
    }
    async getsuario(usuario) {
        return await this.usuarioRepository.findOne({ usuario });
    }
    async atualizar(usuario) {
        return await this.usuarioRepository.update(usuario.id, usuario);
    }
    async visualizar() {
        return this.tipoUsuarioRepository.find();
    }
};
UsuarioService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('USUARIO_REPOSITORY')),
    __param(1, common_1.Inject('TIPOUSUARIO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map