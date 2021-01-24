import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import Patient from '@modules/patients/infra/typeorm/entities/Patient';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(type => Physician)
  @JoinTable()
  physicians: Physician;

  @ManyToMany(type => Patient)
  @JoinTable()
  patients: Patient;

  @Column()
  physician: string;

  @Column()
  patient: string;

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
