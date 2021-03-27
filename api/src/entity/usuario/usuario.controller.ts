import { TipoUsuario } from './tipoUsuario.entity';
import { Usuario } from './usuario.entity';

import { Controller, Get , Response, Post, Body, UseGuards} from '@nestjs/common';
import { UsuarioService } from './usuario.service';

import {JwtGuard} from '../../auth/shared/jwt-auth.guard'

@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @UseGuards(JwtGuard)
  @Get('/listar')
  async all(): Promise<Usuario[]> {
    return this.usuarioService.listar();
  }

  @UseGuards(JwtGuard)
  @Get('/tipoUsuario')
  async tipoUsuario(): Promise<TipoUsuario[]> {
    return this.usuarioService.tiposUsuario();
  }

  @Post('/cadastrar')
  async cadastrar(@Body() usuario: Usuario) {
    return this.usuarioService.cadastrar(usuario);
 
  }


}
