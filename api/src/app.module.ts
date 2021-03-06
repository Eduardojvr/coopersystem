import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './entity/exception.filter';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './entity/usuario/usuario.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static'; // New
import { join } from 'path'; // New

@Module({
  imports: [
    AuthModule,
    ServeStaticModule.forRoot({ // New
      rootPath: join(__dirname, '..', 'src/resources/pages'), // New
    }),
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }, AppService],
})
export class AppModule { }
