import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  save(appointment: Appointment): Promise<Appointment | undefined>;
  findByPatient(patient: string): Promise<Appointment[] | undefined>;
  findByPhysician(physician: string): Promise<Appointment[] | undefined>;
  findById(id: string): Promise<Appointment[] | undefined>;
  findAll(): Promise<Appointment[] | undefined>;
  delete(id: string): Promise<void>;
}
