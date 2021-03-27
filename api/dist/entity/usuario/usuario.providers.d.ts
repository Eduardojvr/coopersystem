import { Connection, Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { TipoUsuario } from './tipoUsuario.entity';
export declare const usuarioProviders: ({
    provide: string;
    useFactory: (connection: Connection) => Repository<Usuario>;
    inject: string[];
} | {
    provide: string;
    useFactory: (connection: Connection) => Repository<TipoUsuario>;
    inject: string[];
})[];
