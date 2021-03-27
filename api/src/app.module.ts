import { UsuarioModule } from './entity/usuario/usuario.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule} from '@nestjs/serve-static'; // New
import { join } from 'path'; // New

@Module({
  imports: [
    ServeStaticModule.forRoot({ // New
      rootPath: join(__dirname, '..', 'src/resources/pages'), // New
    }), 
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
