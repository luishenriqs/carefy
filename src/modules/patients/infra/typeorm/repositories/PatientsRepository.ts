import { getRepository, Repository } from 'typeorm';
import IPatientsRepository from '@modules/patients/repositories/IPatientsRepository';
import ICreatePatientDTO from '@modules/patients/dtos/ICreatePatientDTO';
import Patient from '../entities/Patient';

class PatientsRepository implements IPatientsRepository {
  private ormRepository: Repository<Patient>;

  constructor() {
    this.ormRepository = getRepository(Patient);
  }

  public async findByDate(date: Date): Promise<Patient | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  }

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
}

export default PatientsRepository;
