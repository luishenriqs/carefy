import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Patient from '@modules/patients/infra/typeorm/entities/Patient';
import IPatientsRepository from '../repositories/IPatientsRepository';

interface IRequest {
  id: string;
  name: string;
  preferredPhone: string;
  secondaryPhone: string;
}
/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PatientsRepository'; */
@injectable()
class EditPatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  public async execute({ 
      id,
      name,
      preferredPhone,
      secondaryPhone,
    }: IRequest): Promise<Patient> {
    const patient = await this.patientsRepository.findById(id);


    if (!patient) {
        throw new AppError('Patient not found!');
    }

    patient.name = name;
    patient.preferredPhone = preferredPhone;
    patient.secondaryPhone = secondaryPhone;

    await this.patientsRepository.save(patient);

    return patient;
  }
}

export default EditPatientService;