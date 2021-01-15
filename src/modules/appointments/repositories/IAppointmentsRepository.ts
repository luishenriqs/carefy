import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  save(appointment: Appointment): Promise<Appointment | undefined>;
  findByPatient_Id(patient_id: string): Promise<Appointment[] | undefined>;
  findByPhysician_Id(physician_id: string): Promise<Appointment[] | undefined>;
  findByDay(day: string): Promise<Appointment | undefined>;
  findAll(): Promise<Appointment[] | undefined>;
  delete(id: string): Promise<void>;
}
