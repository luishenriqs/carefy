import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';


@injectable()
class ShowAppointmentByIdService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute(id: string): Promise<Appointment[]> {
    const findAppointment = await this.appointmentsRepository.findById(id);


    if (!findAppointment || findAppointment === []) {
      throw new AppError('Appointment was not found.');
    }
   
    return findAppointment;
  }
}

export default ShowAppointmentByIdService;