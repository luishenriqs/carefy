import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('patients')
class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(type => Appointment, patient => Patient)
  appointments: Appointment;

  @Column()
  name: string;

  @Column()
  codeArea1: string;

  @Column()
  preferredPhone: string;

  @Column()
  codeArea2: string;

  @Column()
  secondaryPhone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Patient;
