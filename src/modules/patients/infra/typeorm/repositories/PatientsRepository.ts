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
    codeArea1,
    preferredPhone,
    codeArea2,
    secondaryPhone,
  }: ICreatePatientDTO): Promise<Patient> {
    const patient = this.ormRepository.create({
      name,
      codeArea1,
      preferredPhone,
      codeArea2,
      secondaryPhone,
    });
    await this.ormRepository.save(patient);
    return patient;
  }
  /* ************************************************************************ */

  /* ******************************[SAVE]************************************ */
  public async save(patient: Patient): Promise<Patient> {
    return this.ormRepository.save(patient);
  }
  /* ************************************************************************ */

  /* **************************[FIND BY NAME]******************************** */
  public async findByName(name: string): Promise<Patient[] | undefined> {
    const foundPatient = await this.ormRepository.find({
      where: { name },
    });
  
    return foundPatient;
  }
  /* ************************************************************************ */

  /* ***************************[FIND BY ID]********************************* */
  public async findById(id: string): Promise<Patient[] | undefined> {
    const foundPatient = await this.ormRepository.find({
      where: { id },
    });
  
    return foundPatient;
  }
  /* ************************************************************************ */

  /* ****************************[FIND ALL]********************************** */
  public async findAll(): Promise<Patient[] | undefined> {
    const allPatients = await this.ormRepository.find();

    return allPatients;

  }
  /* ************************************************************************ */

  /* *****************************[DELETE]*********************************** */
  public async delete(id: string): Promise<void> {
    const removedPatient = await this.ormRepository.findOne({
      where: { id },
    });
    if (removedPatient) await this.ormRepository.remove(removedPatient);
  
    return;
  }
  /* ************************************************************************ */
}

export default PatientsRepository;
