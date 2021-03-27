import { Usuario } from './usuario.entity';

import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async all(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }
}
