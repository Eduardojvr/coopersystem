import { TipoUsuario } from './tipoUsuario.entity';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    tipoUsuario(): Promise<TipoUsuario[]>;
    cadastrar(usuario: Usuario): Promise<Usuario>;
    atualizar(usuario: Usuario): Promise<import("typeorm").UpdateResult>;
    listar(): Promise<any[]>;
    meuUsuario(usuario: any): Promise<any>;
    gerar(usuario: any): Promise<any>;
}
