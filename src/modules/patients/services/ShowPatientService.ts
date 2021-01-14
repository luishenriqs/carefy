import { inject, injectable } from 'tsyringe';
import Patient from '@modules/patients/infra/typeorm/entities/Patient';
import IPatientsRepository from '../repositories/IPatientsRepository';

interface IRequest {
  name: string;
}
/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PatientsRepository'; */
@injectable()
class ShowPatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  public async execute(name: IRequest): Promise<Patient> {

    const patient = await this.patientsRepository.findByName(name);

    return patient;
  }
}

export default ShowPatientService;