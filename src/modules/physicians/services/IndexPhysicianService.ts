import { inject, injectable } from 'tsyringe';
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

    const physician = await this.physiciansRepository.findAll();

    return physician;
  }
}

export default IndexPhysicianService;