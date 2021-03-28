import { UsuarioService } from '../../entity/usuario/usuario.service';
import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'


@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ){}

    async validateUser(usuario: string, senha: string) {
        const user = await this.usuarioService.getsuario(usuario);
        if (user && user.senha === senha) {
          const { id, usuario, tipoUsuario} = user;
          return { id: id, usuario, tipoUsuario };
        }
    
        return null;
      }
    
      async login(user: any) {
        console.log(user);
        const payload = { usuario: user.usuario, sub: user.id, tipoUsuario: user.tipoUsuario };
        return {
          access_token: this.jwtService.sign(payload),
          ref: payload
        };
      }
}
