import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IPhysiciansRepository from '@modules/physicians/repositories/IPhysiciansRepository';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';


@injectable()
class ListAppointmensByPhysicianService {
  constructor(
    @inject('PhysiciansRepository')
    private physiciansRepository: IPhysiciansRepository,

    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}


  public async execute(name: string): Promise<Appointment[]> {

    // Aqui eu acho o médico por nome.
    const physician = await this.physiciansRepository.findByName(name);
    if (!physician) {
      throw new AppError('There was an error, please try again.');      
    }

    // Aqui eu acho os agendamentos pelo id do médico.
    const appointment = await this.appointmentsRepository.findByPhysician_Id(
      physician.id,
    );
    if (!appointment) {
      throw new AppError('There was an error, please try again.');      
    }

    return appointment;
  }
}

export default ListAppointmensByPhysicianService;