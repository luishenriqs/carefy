import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import IPhysicianRepository from '../../../modules/physicians/infra/typeorm/repositories/PhysiciansRepository';

/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PhysicianRepository'; */
@injectable()
class ShowAppointmentByPhysicianService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('PhysiciansRepository')
    private physiciansRepository: IPhysicianRepository,
  ) {}

  public async execute(physician: string): Promise<Appointment[]> {
    const findPhysician = await this.physiciansRepository.findByName(physician);
    if (!findPhysician) {
      throw new AppError('Physician not founded.');
    }
    
    const { id } = findPhysician[0];
    
    if (!id) {
      throw new AppError('Physician_id not founded.');    
    }

    const appointments = await this.appointmentsRepository.findByPhysician_id(
      id,
    );

    if (!appointments) {
      throw new AppError('There was an error, please try again.');      
    }
    return appointments;
  }
}

export default ShowAppointmentByPhysicianService;