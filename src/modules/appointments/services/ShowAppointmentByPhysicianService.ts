import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import IPhysiciansRepository from '../../../modules/physicians/infra/typeorm/repositories/PhysiciansRepository';

@injectable()
class ShowAppointmentByPhysicianService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('PhysiciansRepository')
    private physiciansRepository: IPhysiciansRepository,
  ) {}

  public async execute(physician: string): Promise<Appointment[]> {
    const findPhysician = await this.physiciansRepository.findByName(physician);

    let name = '';

    if (!findPhysician || findPhysician === []) {
      throw new AppError('Physician was not found.');
    }
   
    name = findPhysician[0].name;
   
    if (!name) {
      throw new AppError('Physician`s name was not found.');    
    }

    const appointments = await this.appointmentsRepository.findByPhysician(
      name,
    );

    if (!appointments) {
      throw new AppError('There was an error, please try again.');      
    }
    return appointments;
  }
}

export default ShowAppointmentByPhysicianService;