import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Explicitly define the exact MySQL table name in phpMyAdmin
@Entity('users') 
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}