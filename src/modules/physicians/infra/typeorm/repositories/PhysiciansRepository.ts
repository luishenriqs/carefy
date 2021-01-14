import { getRepository, Repository } from 'typeorm';
import IPhysiciansRepository from '@modules/physicians/repositories/IPhysiciansRepository';
import ICreatePhysicianDTO from '@modules/physicians/dtos/ICreatePhysicianDTO';
import Physician from '../entities/Physician';

class PhysiciansRepository implements IPhysiciansRepository {
  private ormRepository: Repository<Physician>;

  constructor() {
    this.ormRepository = getRepository(Physician);
  }

  public async findByDate(date: Date): Promise<Physician | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  }

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
}

export default PhysiciansRepository;
