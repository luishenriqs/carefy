import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';


@injectable()
class ListAppointmensByPatientService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}


  public async execute(name: string): Promise<Appointment[]> {

    const appointment = await this.appointmentsRepository.findByPatient(
      name,
    );
    if (!appointment) {
      throw new AppError('There was an error, please try again.');      
    }

    return appointment;
  }
}

export default ListAppointmensByPatientService;