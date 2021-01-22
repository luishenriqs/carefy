import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';


@injectable()
class DeleteAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    if (!id) {
      throw new AppError('Appointment not found');
    }
    await this.appointmentsRepository.delete(id);
    return;
  }
}

export default DeleteAppointmentService;