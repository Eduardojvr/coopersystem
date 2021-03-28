import { TipoUsuario } from './tipoUsuario.entity';
import { Usuario } from './usuario.entity';

import { Controller, Get , Response, Post, Body, UseGuards, Put, Request} from '@nestjs/common';
import { UsuarioService } from './usuario.service';

import {JwtGuard} from '../../auth/shared/jwt-auth.guard'


@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  // @UseGuards(JwtGuard)
  // @Get('/listar')
  // async all(): Promise<Usuario[]> {
  //   return this.usuarioService.listar();
  // }

  @UseGuards(JwtGuard)
  @Get('/tipoUsuario')
  async tipoUsuario(): Promise<TipoUsuario[]> {
    return this.usuarioService.tiposUsuario();
  }

  @Post('/cadastrar')
  async cadastrar(@Body() usuario: Usuario) {
    return this.usuarioService.cadastrar(usuario);
 
  }

  @Post('/atualizar')
  async atualizar(@Body() usuario: Usuario) {
    console.log(usuario);
    return this.usuarioService.atualizar(usuario);
 
  }

  @Get('/listar')
  async listar(): Promise<any[]> {
    return this.usuarioService.listar();
  }

  @Get('/meuUsuario')
  async meuUsuario(@Request() usuario: any):Promise<any> {
    return this.usuarioService.getsuario(usuario.query.usuario);
  }

  @Get('/gerar')
  async gerar(@Request() usuario: any):Promise<any> {
    const user = await this.usuarioService.getsuario(usuario.query.usuario);
    user.senha = Math.random().toString(36).slice(-10);

    this.usuarioService.atualizar(user);

    var nodemailer = require('nodemailer');
    var remetente = nodemailer.createTransport({
      host: 'coopersystemsmtp@gmail.com',  
      service: 'coopersystemsmtp@gmail.com',
      port: 587,  
      secure: true,
      auth:{
      user: 'coopersystemsmtp@gmail.com',
      pass: 'smtpcooper' }
  
      });

      var emailASerEnviado = {
        from: 'coopersystemsmtp@gmail.com',
        to: user.usuario,
        subject: 'Sua nova senha',
        text: 'Esta é sua nova senha: '+user.senha,
    
        };




    if(user){
      remetente.sendMail(emailASerEnviado, function(error){

        if (error) {
    
        console.log(error);
    
        } else {
    
        console.log('Email enviado!');
    
        }
    
        });

    }
    return "Email enviado!";
  }



}
