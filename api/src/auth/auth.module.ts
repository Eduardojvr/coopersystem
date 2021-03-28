import { jwtConstants } from './shared/constants';
import { JwtStrategy } from './shared/jwt.strategy';
import { LocalStrategy } from './shared/local.strategy';
import { AuthController } from './auth.controller';
import { UsuarioModule } from './../entity/usuario/usuario.module';
import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt'
import {PassportModule} from '@nestjs/passport'


@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '3600s'}
        })
    ],
    controllers: [
        AuthController,],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
})
export class AuthModule { }
