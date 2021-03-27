import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    all(): Promise<Usuario[]>;
}
