import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IPatientsRepository from '../repositories/IPatientsRepository';

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
  }
}

export default DeletePatientService;