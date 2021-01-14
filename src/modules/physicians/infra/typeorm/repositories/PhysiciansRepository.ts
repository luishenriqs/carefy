import { getRepository, Repository } from 'typeorm';
import IPhysiciansRepository from '@modules/physicians/repositories/IPhysiciansRepository';
import ICreatePhysicianDTO from '@modules/physicians/dtos/ICreatePhysicianDTO';
import Physician from '../entities/Physician';

class PhysiciansRepository implements IPhysiciansRepository {
  private ormRepository: Repository<Physician>;

  constructor() {
    this.ormRepository = getRepository(Physician);
  }

  /* ****************************[CREATE]************************************ */
  public async create({
    name,
    medicalSpecialty,
  }: ICreatePhysicianDTO): Promise<Physician> {
    const physician = this.ormRepository.create({
      name,
      medicalSpecialty,
    });
    await this.ormRepository.save(physician);
    return physician;
  }
  /* ************************************************************************ */

  /* **************************[FIND BY NAME]******************************** */
  public async findByName(name: string): Promise<Physician | undefined> {
    const findPhysician = await this.ormRepository.findOne({
      where: { name },
    });

    return findPhysician;
  }
  /* ************************************************************************ */

  /* **********************[FIND BY SPECIALTY]******************************* */
  public async findBySpecialty(specialty: string): Promise<Physician | undefined> {
    const findPhysician = await this.ormRepository.findOne({
      where: { specialty },
    });

    return findPhysician;
  }
  /* ************************************************************************ */
}

export default PhysiciansRepository;
