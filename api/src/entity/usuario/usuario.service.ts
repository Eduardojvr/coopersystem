import { Usuario } from './usuario.entity';
import { TipoUsuario } from './tipoUsuario.entity';


import { Injectable, Inject } from '@nestjs/common';
import { Repository, ManyToOne } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,

    @Inject('TIPOUSUARIO_REPOSITORY')
    private tipoUsuarioRepository: Repository<TipoUsuario>,



  ) {}

  // async listar(): Promise<Usuario[]> {
  //   return this.usuarioRepository.find();
  // }
  async getRepositoryUsuario(): Promise<Repository<Usuario>> {
    return (this.usuarioRepository);
  }

  async tiposUsuario(): Promise<TipoUsuario[]> {
    return this.tipoUsuarioRepository.find();
  }

  async cadastrar(usuario: Usuario) {
    usuario.tipoUsuario = 0;
    console.log(usuario);
    return this.usuarioRepository.save(usuario);
  }

  async getsuario(usuario: string){
    return await this.usuarioRepository.findOne({usuario});

  }

  async atualizar(usuario : Usuario) {
    return await this.usuarioRepository.update(usuario.id, usuario);
  }

  async listar(): Promise<any[]> {
    const tmp = await this.usuarioRepository.createQueryBuilder('user')
    .innerJoinAndSelect("user.tipoUsuario", "idTipoUsuario").getMany();
    // .select("*")
    // .from(Usuario, "user")
    // .innerJoin(TipoUsuario, "tipoUser")
    // .where("user.tipoUsuario = tipoUser.idTipo").execute();
    return tmp;
  }


}
