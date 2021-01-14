import { v4 as uuidv4 } from 'uuid';
import IPhysiciansRepository from '@modules/physicians/repositories/IPhysiciansRepository';
import ICreatePhysicianDTO from '@modules/physicians/dtos/ICreatePhysicianDTO';
import Physician from '../../infra/typeorm/entities/Physician';

/* Patient Repository fake criado para testes. Substitui database;  */
class PhysiciansRepository implements IPhysiciansRepository {
  private physicians: Physician[] = [];

  // Procura no array de appointments por um que tenha mesmo date;
  public async findByDate(date: Date): Promise<Physician | undefined> {
    return Physician;
  }

  public async create({
    name,
    medicalSpecialty,
  }: ICreatePhysicianDTO): Promise<Physician> {
    const physician = new Physician();

    // Insere no primeiro parâmetro (physician) as propriedades passadas no objeto;
    Object.assign(physician, { id: uuidv4(), name, medicalSpecialty });

    this.physicians.push(physician);

    return physician;
  }
}

export default PhysiciansRepository;
