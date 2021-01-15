import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import IPhysiciansRepository from '../repositories/IPhysiciansRepository';

interface IRequest {
  name: string;
  medicalSpecialty: string;
}
/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PhysiciansRepository'; */
@injectable()
class CreatePhysicianService {
  constructor(
    @inject('PhysiciansRepository')
    private physiciansRepository: IPhysiciansRepository,
  ) {}

  public async execute({
    name,
    medicalSpecialty,
  }: IRequest): Promise<Physician> {

    if (!name || !medicalSpecialty) {
      throw new AppError('There was an error, please try again.');      
    }

    const physician = await this.physiciansRepository.create({
      name,
      medicalSpecialty,
    });

    return physician;
  }
}

export default CreatePhysicianService;
