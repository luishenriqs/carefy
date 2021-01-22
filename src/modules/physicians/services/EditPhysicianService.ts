import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import IPhysiciansRepository from '../repositories/IPhysiciansRepository';

interface IRequest {
  oldName: string;
  name: string;
  medicalSpecialty: string;
}

@injectable()
class EditPhysicianService {
  constructor(
    @inject('PhysiciansRepository')
    private physiciansRepository: IPhysiciansRepository,
  ) {}

  public async execute({ 
      oldName,
      name,
      medicalSpecialty,
    }: IRequest): Promise<Physician> {
    const physician = await this.physiciansRepository.findByName(oldName);


    if (!physician) {
        throw new AppError('Physician not found!');
    }

    physician[0].name = name;
    physician[0].medicalSpecialty = medicalSpecialty;

    await this.physiciansRepository.save(physician[0]);

    return physician[0];
  }
}

export default EditPhysicianService;