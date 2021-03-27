import { TipoUsuario } from './tipoUsuario.entity';
import { Usuario } from './usuario.entity';

import { Controller, Get , Response} from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}


  @Get('/listar')
  async all(): Promise<Usuario[]> {
    return this.usuarioService.listar();
  }

  @Get('/tipoUsuario')
  async tipoUsuario(): Promise<TipoUsuario[]> {
    return this.usuarioService.tiposUsuario();
  }


}
