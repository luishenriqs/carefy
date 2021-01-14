import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePhysicianService from '@modules/physicians/services/CreatePhysicianService';

export default class PhysiciansController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, medicalSpecialty } = request.body;

    /* O 'container.resolve' injeta uma instância da classe do service
    "CreatePhysicianService" dentro da rota;  */
    const createPhysician = container.resolve(CreatePhysicianService);
    const physician = await createPhysician.execute({
      name,
      medicalSpecialty,
    });
    return response.json(physician);
  }
}
