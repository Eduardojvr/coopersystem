import { Usuario } from './usuario.entity';
import { TipoUsuario } from './tipoUsuario.entity';


import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,

    @Inject('TIPOUSUARIO_REPOSITORY')
    private tipoUsuarioRepository: Repository<TipoUsuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async tiposUsuario(): Promise<TipoUsuario[]> {
    return this.tipoUsuarioRepository.find();
  }

  async cadastrar(usuario: Usuario) {
    return this.usuarioRepository.save(usuario);
  }

  async getsuario(usuario: string){
    return await this.usuarioRepository.findOne({usuario});

  }

  async atualizar(usuario : Usuario) {
    return await this.usuarioRepository.update(usuario.id, usuario);
  }

  async visualizar(): Promise<TipoUsuario[]> {
    return this.tipoUsuarioRepository.find();
  }

}
