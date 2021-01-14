import Physician from '@modules/physicians/infra/typeorm/entities/Physician';
import ICreatePhysicianDTO from '../dtos/ICreatePhysicianDTO';

export default interface IPhysiciansRepository {
  create(data: ICreatePhysicianDTO): Promise<Physician>;
  findByDate(date: Date): Promise<Physician | undefined>;
}
