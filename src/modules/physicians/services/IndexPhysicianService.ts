import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import IPhysiciansRepository from '../repositories/IPhysiciansRepository';

/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PhysicianRepository'; */
@injectable()
class IndexPhysicianService {
  constructor(
    @inject('PhysiciansRepository')
    private physiciansRepository: IPhysiciansRepository,
  ) {}

  public async execute(): Promise<Physician> {

    const physicians = await this.physiciansRepository.findAll();

    if (!physicians) {
      throw new AppError('There was an error, please try again.');      
    }

    return physicians;
  }
}

export default IndexPhysicianService;