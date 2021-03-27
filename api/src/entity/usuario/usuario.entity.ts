
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  usuario: string;

  @Column({ length: 250 })
  senha: string;

  @Column()
  tipoUsuario: number;

}