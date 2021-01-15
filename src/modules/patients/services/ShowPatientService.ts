import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Patient from '@modules/patients/infra/typeorm/entities/Patient';
import IPatientsRepository from '../repositories/IPatientsRepository';


/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PatientsRepository'; */
@injectable()
class ShowPatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  public async execute(name: string): Promise<Patient> {

    const patient = await this.patientsRepository.findByName(name);

    if (!patient) {
      throw new AppError('There was an error, please try again.');      
    }
    return patient;
  }
}

export default ShowPatientService;