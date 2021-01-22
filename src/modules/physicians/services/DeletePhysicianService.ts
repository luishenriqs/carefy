import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IPhysiciansRepository from '../repositories/IPhysiciansRepository';

@injectable()
class DeletePhysicianService {
  constructor(
    @inject('PhysiciansRepository')
    private physiciansRepository: IPhysiciansRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    if (!id) {
      throw new AppError('Physician not found.');      
    }
    await this.physiciansRepository.delete(id);
  }
}

export default DeletePhysicianService;