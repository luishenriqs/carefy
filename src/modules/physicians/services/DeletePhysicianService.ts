import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import IPhysiciansRepository from '../repositories/IPhysiciansRepository';

interface IRequest {
  id: string;
}
/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PhysiciansRepository'; */
@injectable()
class DeletePhysicianService {
  constructor(
    @inject('PhysiciansRepository')
    private physiciansRepository: IPhysiciansRepository,
  ) {}

  public async execute(id: IRequest): Promise<Physician> {
    await this.physiciansRepository.delete(id);
    return;
  }
}

export default DeletePhysicianService;