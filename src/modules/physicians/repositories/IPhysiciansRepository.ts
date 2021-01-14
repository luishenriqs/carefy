import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import ICreatePhysicianDTO from '../dtos/ICreatePhysicianDTO';

export default interface IPhysiciansRepository {
  create(data: ICreatePhysicianDTO): Promise<Physician>;
  findByName(name: string): Promise<Physician | undefined>;
  findBySpecialty(specialty: string): Promise<Physician | undefined>;
}
