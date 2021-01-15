import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'AppointmentsRepository'; */
@injectable()
class IndexAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute(): Promise<Appointment> {

    const appointments = await this.appointmentsRepository.findAll();

    if (!appointments) {
      throw new AppError('There was an error, please try again.');      
    }
    return appointments;
  }
}

export default IndexAppointmentService;