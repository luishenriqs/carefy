import { inject, injectable } from 'tsyringe';
import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import IPhysiciansRepository from '../repositories/IPhysiciansRepository';

interface IRequest {
  name: string;
}
/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PhysicianRepository'; */
@injectable()
class ShowPhysicianService {
  constructor(
    @inject('PhysiciansRepository')
    private physiciansRepository: IPhysiciansRepository,
  ) {}

  public async execute(name: IRequest): Promise<Physician> {

    const physician = await this.physiciansRepository.findByName(name);

    return physician;
  }
}

export default ShowPhysicianService;