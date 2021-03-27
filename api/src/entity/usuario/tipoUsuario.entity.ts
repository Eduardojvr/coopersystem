
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoUsuario {
  @PrimaryGeneratedColumn()
  idTipo: number;

  @Column({ length: 100 })
  tipoUsuario: string;

}

