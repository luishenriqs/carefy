import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  physician: string;
  patient: string;
  day: string;
  month: string;
  start: string;
  end: string;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    physician,
    patient,
    day,
    month,
    start,
    end,
  }: IRequest): Promise<Appointment> {

    if (!physician || !patient || !day || !month || !start || !end) {
      throw new AppError('There was an error, please try again.');   
    }

    const appointment = await this.appointmentsRepository.create({
      physician,
      patient,
      day,
      month,
      start,
      end,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
