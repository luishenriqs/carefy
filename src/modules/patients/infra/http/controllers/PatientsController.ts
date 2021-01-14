import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePatientService from '@modules/patients/services/CreatePatientService';

export default class PatientsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, preferredPhone, secondaryPhone } = request.body;

    /* O 'container.resolve' injeta uma instância da classe do service
    "CreatePatientService" dentro da rota;  */
    const createPatient = container.resolve(CreatePatientService);
    const patient = await createPatient.execute({
      name,
      preferredPhone,
      secondaryPhone,
    });
    return response.json(patient);
  }
}
