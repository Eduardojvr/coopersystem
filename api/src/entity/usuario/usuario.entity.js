"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Usuario = void 0;
var typeorm_1 = require("typeorm");
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Usuario.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 100 })
    ], Usuario.prototype, "nome");
    __decorate([
        typeorm_1.Column({ length: 100 })
    ], Usuario.prototype, "usuario");
    __decorate([
        typeorm_1.Column({ length: 250 })
    ], Usuario.prototype, "senha");
    Usuario = __decorate([
        typeorm_1.Entity()
    ], Usuario);
    return Usuario;
}());
exports.Usuario = Usuario;
