import Patient from '@modules/patients/infra/typeorm/entities/Patient';
import ICreatePatientDTO from '../dtos/ICreatePatientDTO';

export default interface IPatientsRepository {
  create(data: ICreatePatientDTO): Promise<Patient>;
  findByDate(date: Date): Promise<Patient | undefined>;
}
