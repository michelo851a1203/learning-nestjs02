import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { StatusEnum } from './tasks.enum';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ default: '', nullable: false })
  name: string;
  @Column({ type: 'float', default: 0, nullable: false })
  price: number;

  @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.STATUS_OPEN })
  status: StatusEnum;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @VersionColumn({ default: 1 })
  version: number;
}
