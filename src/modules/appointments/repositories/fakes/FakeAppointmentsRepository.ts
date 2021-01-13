import { v4 as uuidv4 } from 'uuid';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import { isEqual } from 'date-fns';
import Appointment from '../../infra/typeorm/entities/Appointment';

/* Appointment Repository fake criado para testes. Substitui database;  */
class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  // Procura no array de appointments por um que tenha mesmo date;
  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(appointment.date, date),
    );
    return findAppointment;
  }

  public async create({
    physician_id,
    patient_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment();

    // Insere no primeiro parâmetro (appointment) as propriedades passadas no objeto;
    Object.assign(appointment, { id: uuidv4(), physician_id, patient_id, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
