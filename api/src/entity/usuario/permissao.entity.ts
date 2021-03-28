
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Permissao {

  @PrimaryGeneratedColumn()
  idTipo: number;

  @Column({ length: 100 })
  tipoPermissao: string;

}

