import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import Patient from '@modules/patients/infra/typeorm/entities/Patient';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => Physician, appointments => Appointment, {eager:true})
  physician: Physician;

  @ManyToOne(type => Patient, appointments => Appointment, {eager:true})
  Patient: Patient;

  // @Column()
  // physician_id: string;

  // @Column()
  // patient_id: string;

  @Column()
  day: string;
  
  @Column()
  month: string;
  
  @Column()
  start: string;
  
  @Column()
  end: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
