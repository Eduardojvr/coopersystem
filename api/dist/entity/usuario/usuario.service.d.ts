import { Usuario } from './usuario.entity';
import { TipoUsuario } from './tipoUsuario.entity';
import { Repository } from 'typeorm';
export declare class UsuarioService {
    private usuarioRepository;
    private tipoUsuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>, tipoUsuarioRepository: Repository<TipoUsuario>);
    getRepositoryUsuario(): Promise<Repository<Usuario>>;
    tiposUsuario(): Promise<TipoUsuario[]>;
    cadastrar(usuario: Usuario): Promise<Usuario>;
    getsuario(usuario: string): Promise<Usuario>;
    atualizar(usuario: Usuario): Promise<import("typeorm").UpdateResult>;
    listar(): Promise<any[]>;
}
