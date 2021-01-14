import { getRepository, Repository } from 'typeorm';
import IPatientsRepository from '@modules/patients/repositories/IPatientsRepository';
import ICreatePatientDTO from '@modules/patients/dtos/ICreatePatientDTO';
import Patient from '../entities/Patient';

class PatientsRepository implements IPatientsRepository {
  private ormRepository: Repository<Patient>;

  constructor() {
    this.ormRepository = getRepository(Patient);
  }
  
  /* *****************************[CREATE]*********************************** */
  public async create({
    name,
    preferredPhone,
    secondaryPhone,
  }: ICreatePatientDTO): Promise<Patient> {
    const patient = this.ormRepository.create({
      name,
      preferredPhone,
      secondaryPhone,
    });
    await this.ormRepository.save(patient);
    return patient;
  }
  /* ************************************************************************ */

  /* **************************[FIND BY NAME]******************************** */
  public async findByName(name: string): Promise<Patient | undefined> {
    const findPatient = await this.ormRepository.findOne({
      where: { name },
    });
  
    return findPatient;
  }
  /* ************************************************************************ */
}

export default PatientsRepository;
