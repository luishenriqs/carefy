import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import ICreatePhysicianDTO from '../dtos/ICreatePhysicianDTO';

export default interface IPhysiciansRepository {
  create(data: ICreatePhysicianDTO): Promise<Physician>;
  save(physician: Physician): Promise<Physician | undefined>;
  findByName(name: string): Promise<Physician[] | undefined>;
  findBySpecialty(specialty: string): Promise<Physician[] | undefined>;
  findById(id: string): Promise<Physician | undefined>;
  findAll(): Promise<Physician[] | undefined>;
  delete(id:string): Promise<void>;
}
