import { startOfHour } from 'date-fns';
import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  id: string;
  physician_id: string;
  patient_id: string;
  date: Date;
}
/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'AppointmentsRepository'; */
@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    id,
    physician_id,
    patient_id,
    date
  }: IRequest): Promise<Appointment> {
    const AppointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      AppointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await this.appointmentsRepository.create({
      id,
      physician_id,
      patient_id,
      date: AppointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
