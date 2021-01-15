import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IPatientsRepository from '../repositories/IPatientsRepository';


/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PatientsRepository'; */
@injectable()
class DeletePatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    if (!id) {
      throw new AppError('Patient not found');
    }
    await this.patientsRepository.delete(id);
    return;
  }
}

export default DeletePatientService;