import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('physicians')
class Physician {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(type => Appointment, physician => Physician)
  appointments: Appointment;

  @Column()
  name: string;

  @Column()
  medicalSpecialty: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Physician;
