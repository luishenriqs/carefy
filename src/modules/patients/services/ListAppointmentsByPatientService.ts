import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IPatientsRepository from '@modules/patients/repositories/IPatientsRepository';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';


@injectable()
class ListAppointmensByPatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,

    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}


  public async execute(name: string): Promise<Appointment[]> {

    // Aqui eu acho o paciente por nome.
    const patient = await this.patientsRepository.findByName(name);
    if (!patient) {
      throw new AppError('There was an error, please try again.');      
    }

    // Aqui eu acho os agendamentos pelo id do médico.
    const appointment = await this.appointmentsRepository.findByPatient_Id(
      patient.id,
    );
    if (!appointment) {
      throw new AppError('There was an error, please try again.');      
    }

    return appointment;
  }
}

export default ListAppointmensByPatientService;