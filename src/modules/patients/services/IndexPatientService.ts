import { inject, injectable } from 'tsyringe';
import Patient from '@modules/patients/infra/typeorm/entities/Patient';
import IPatientsRepository from '../repositories/IPatientsRepository';

/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PatientsRepository'; */
@injectable()
class IndexPatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  public async execute(): Promise<Patient> {

    const patients = await this.patientsRepository.findAll();

    return patients;
  }
}

export default IndexPatientService;