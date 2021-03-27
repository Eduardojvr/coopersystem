import { Usuario } from './usuario.entity';
import { Controller, Get } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('/all')
  async all(): Promise<Usuario[]> {
    return this.usuarioService.all();
  }
}
