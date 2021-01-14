import { v4 as uuidv4 } from 'uuid';
import IPatientsRepository from '@modules/patients/repositories/IPatientsRepository';
import ICreatePatientDTO from '@modules/patients/dtos/ICreatePatientDTO';
import Patient from '../../infra/typeorm/entities/Patient';

/* Patient Repository fake criado para testes. Substitui database;  */
class PatientsRepository implements IPatientsRepository {
  private patients: Patient[] = [];

  // Procura no array de appointments por um que tenha mesmo date;
  public async findByDate(date: Date): Promise<Patient | undefined> {

  }

  public async create({
    name,
    preferredPhone,
    secondaryPhone,
  }: ICreatePatientDTO): Promise<Patient> {
    const patient = new Patient();

    // Insere no primeiro parâmetro (patient) as propriedades passadas no objeto;
    Object.assign(patient, { id: uuidv4(), name, preferredPhone, secondaryPhone });

    this.patients.push(patient);

    return patient;
  }
}

export default PatientsRepository;
