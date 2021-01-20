import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import IPhysiciansRepository from '../repositories/IPhysiciansRepository';


/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PhysicianRepository'; */
@injectable()
class ShowPhysicianByNameService {
  constructor(
    @inject('PhysiciansRepository')
    private physiciansRepository: IPhysiciansRepository,
  ) {}

  public async execute(medicalSpecialty: string): Promise<Physician[]> {

    const physician = await this.physiciansRepository.findBySpecialty(medicalSpecialty);

    if (!physician) {
      throw new AppError('There was an error, please try again.');      
    }
    return physician;
  }
}

export default ShowPhysicianByNameService;