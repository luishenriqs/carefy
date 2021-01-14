import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Patient from '@modules/patients/infra/typeorm/entities/Patient';
import IPatientsRepository from '../repositories/IPatientsRepository';

interface IRequest {
  id: string;
}
/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PatientsRepository'; */
@injectable()
class DeletePatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  public async execute(id: IRequest): Promise<Patient> {
    await this.patientsRepository.delete(id);
    return;
  }
}

export default DeletePatientService;