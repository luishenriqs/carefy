import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';


/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'AppointmentsRepository'; */
@injectable()
class ShowAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute(patient_id: string): Promise<Appointment> {

    const appointment = await this.appointmentsRepository.findByPatient_Id(
      patient_id,
    );

    if (!appointment) {
      throw new AppError('There was an error, please try again.');      
    }
    return appointment;
  }
}

export default ShowAppointmentService;