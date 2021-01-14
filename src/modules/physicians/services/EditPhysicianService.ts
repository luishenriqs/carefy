import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import IPhysiciansRepository from '../repositories/IPhysiciansRepository';

interface IRequest {
  id: string;
  name: string;
  medicalSpecialty: string;
}
/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PhysiciansRepository'; */
@injectable()
class EditPhysicianService {
  constructor(
    @inject('PhysiciansRepository')
    private physiciansRepository: IPhysiciansRepository,
  ) {}

  public async execute({ 
      id,
      name,
      medicalSpecialty,
    }: IRequest): Promise<Physician> {
    const physician = await this.physiciansRepository.findById(id);


    if (!physician) {
        throw new AppError('Physician not found!');
    }

    physician.name = name;
    physician.medicalSpecialty = medicalSpecialty;

    await this.physiciansRepository.save(physician);

    return physician;
  }
}

export default EditPhysicianService;