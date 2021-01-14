import Patient from '@modules/patients/infra/typeorm/entities/Patient';
import ICreatePatientDTO from '../dtos/ICreatePatientDTO';

export default interface IPatientsRepository {
  create(data: ICreatePatientDTO): Promise<Patient>;
  save(patient: Patient): Promise<Patient | undefined>;
  findByName(name: string): Promise<Patient | undefined>;
  findById(id: string): Promise<Patient | undefined>;
  findAll(): Promise<Patient | undefined>;
}
