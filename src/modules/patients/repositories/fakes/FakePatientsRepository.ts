import { v4 as uuidv4 } from 'uuid';
import IPatientsRepository from '@modules/patients/repositories/IPatientsRepository';
import ICreatePatientDTO from '@modules/patients/dtos/ICreatePatientDTO';
import Patient from '../../infra/typeorm/entities/Patient';

/* Patient Repository Fake criado para testes. Substitui database;  */
class PatientsRepository implements IPatientsRepository {
  // Array simulando database;
  private patients: Patient[] = [];
  
  /* *****************************[CREATE]*********************************** */
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
  /* ************************************************************************ */

  /* **************************[FIND BY NAME]******************************** */
  // Procura no array "patients" por um elemento com mesmo name;
  public async findByName(name: string): Promise<Patient | undefined> {
    const patient = await this.patients.find(patient => patient.name === name);

    return patient;
  }
  /* ************************************************************************ */
}

export default PatientsRepository;
