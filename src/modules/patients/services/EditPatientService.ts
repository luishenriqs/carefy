import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Patient from '@modules/patients/infra/typeorm/entities/Patient';
import IPatientsRepository from '../repositories/IPatientsRepository';

interface IRequest {
  oldName: string,
  name: string;
  codeArea1: string;
  preferredPhone: string;
  codeArea2: string;
  secondaryPhone: string;
}
@injectable()
class EditPatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  public async execute({ 
      oldName,
      name,
      codeArea1,
      preferredPhone,
      codeArea2,
      secondaryPhone,
    }: IRequest): Promise<Patient> {
    const patient = await this.patientsRepository.findByName(oldName);
  
    if (!patient) {
      throw new AppError('Patient not found!');
    }

    patient[0].name = name;
    patient[0].codeArea1 = codeArea1;
    patient[0].preferredPhone = preferredPhone;
    patient[0].codeArea2 = codeArea2;
    patient[0].secondaryPhone = secondaryPhone;

    await this.patientsRepository.save(patient[0]);

    return patient[0];
  }
}

export default EditPatientService;