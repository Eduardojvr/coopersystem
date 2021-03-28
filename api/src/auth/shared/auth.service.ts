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
        let user = await this.usuarioService.getsuario(usuario);
        if (user && user.senha === senha) {
          const { id, usuario, tipoUsuario} = user;
    //      const rep = await this.usuarioService.getRepositoryUsuario()
    //      const tmp = await rep.createQueryBuilder('user')
    // .innerJoinAndSelect("user.tipoUsuario", "idTipoUsuario")
    // .where("id = user.id")
    // .getOne();
    // console.log( tmp.tipoUsuario["idTipo"]);
          return { id: id, usuario};
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
