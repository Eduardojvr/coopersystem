import { Connection, Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { TipoUsuario } from './tipoUsuario.entity';


export const usuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Usuario),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'TIPOUSUARIO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(TipoUsuario),
    inject: ['DATABASE_CONNECTION'],
  },
];
