import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Patient from '@modules/patients/infra/typeorm/entities/Patient';
import IPatientsRepository from '../repositories/IPatientsRepository';

interface IRequest {
  name: string;
  preferredPhone: string;
  secondaryPhone: string;
}
/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PatientsRepository'; */
@injectable()
class CreatePatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  public async execute({
    name,
    preferredPhone,
    secondaryPhone,
  }: IRequest): Promise<Patient> {

    if (!name || !preferredPhone || !secondaryPhone) {
      throw new AppError('There was an error, please try again.');   
    }

    const patient = await this.patientsRepository.create({
      name,
      preferredPhone,
      secondaryPhone,
    });

    return patient;
  }
}

export default CreatePatientService;
