import { TipoUsuario } from './tipoUsuario.entity';

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, OneToOne } from 'typeorm';
import { Permissao } from './permissao.entity';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  usuario: string;

  @Column({ length: 250 })
  senha: string;

  @ManyToOne(type => TipoUsuario)
  @JoinColumn({ name: 'tipoUsuario' })
  tipoUsuario: number;

  @Column()
  visualizar: boolean;

  @Column()
  editar: boolean;

  @Column()
  cadastrar: boolean;

  @Column()
  listar: boolean;

  // @ManyToMany(type => Permissao)
  // @JoinColumn()
  // tipoPermissao: number;

}