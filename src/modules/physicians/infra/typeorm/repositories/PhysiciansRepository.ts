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
    const physician = await this.ormRepository.create({
      name,
      medicalSpecialty,
    });
    await this.ormRepository.save(physician);
    return physician;
  }
  /* ************************************************************************ */

  /* ******************************[SAVE]************************************ */
  public async save(physician: Physician): Promise<Physician> {
    return this.ormRepository.save(physician);
  }
  /* ************************************************************************ */

  /* **************************[FIND BY NAME]******************************** */
  public async findByName(name: string): Promise<Physician[] | undefined> {
    const findPhysician = await this.ormRepository.find({
      where: { name },
    });
    
    return findPhysician;
  }
  /* ************************************************************************ */
  
  /* **********************[FIND BY SPECIALTY]******************************* */
  public async findBySpecialty(medicalSpecialty: string): Promise<Physician[] | undefined> {
    const findPhysician = await this.ormRepository.find({
      where: { medicalSpecialty },
    });

    return findPhysician;
  }
  /* ************************************************************************ */

  /* ***************************[FIND BY ID]********************************* */
  public async findById(id: string): Promise<Physician[] | undefined> {
    const findPhysician = await this.ormRepository.find({
      where: { id },
    });

    return findPhysician;
  }
  /* ************************************************************************ */

  /* ****************************[FIND ALL]********************************** */
  public async findAll(): Promise<Physician[] | undefined> {
    const allPhysicians = await this.ormRepository.find();
  
    return allPhysicians;
  }
  /* ************************************************************************ */

  /* *****************************[DELETE]*********************************** */
  public async delete(id: string): Promise<void> {
    const removedPhysician = await this.ormRepository.findOne({
      where: { id },
    });
    await this.ormRepository.remove(removedPhysician);
  
    return;
  }
  /* ************************************************************************ */
}

export default PhysiciansRepository;
