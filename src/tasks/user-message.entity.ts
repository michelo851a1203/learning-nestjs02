import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import {Users} from './user.entity';

@Entity()
export class UserMessages {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ default: '', nullable: false })
  name: string;


  @ManyToOne(() => Users)
  users: Users

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @VersionColumn({ default: 1 })
  version: number;
}
