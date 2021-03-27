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

  async cadastrar(): Promise<TipoUsuario[]> {
    return this.tipoUsuarioRepository.find();
  }

  async editar(): Promise<TipoUsuario[]> {
    return this.tipoUsuarioRepository.find();
  }

  async visualizar(): Promise<TipoUsuario[]> {
    return this.tipoUsuarioRepository.find();
  }

}
