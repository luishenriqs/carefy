import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import IPhysiciansRepository from '../repositories/IPhysiciansRepository';

@injectable()
class ShowPhysicianByNameService {
  constructor(
    @inject('PhysiciansRepository')
    private physiciansRepository: IPhysiciansRepository,
  ) {}

  public async execute(name: string): Promise<Physician[]> {
   
    const physician = await this.physiciansRepository.findByName(name);
    
    if (!physician) {
      throw new AppError('There was an error, please try again.');      
    }
    return physician;
  }
}

export default ShowPhysicianByNameService;