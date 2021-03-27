import { Usuario } from './usuario.entity';
import { TipoUsuario } from './tipoUsuario.entity';
import { Repository } from 'typeorm';
export declare class UsuarioService {
    private usuarioRepository;
    private tipoUsuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>, tipoUsuarioRepository: Repository<TipoUsuario>);
    listar(): Promise<Usuario[]>;
    tiposUsuario(): Promise<TipoUsuario[]>;
    cadastrar(usuario: Usuario): Promise<Usuario>;
    getsuario(usuario: string): Promise<Usuario>;
    editar(): Promise<TipoUsuario[]>;
    visualizar(): Promise<TipoUsuario[]>;
}
