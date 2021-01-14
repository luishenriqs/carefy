import { v4 as uuidv4 } from 'uuid';
import IPhysiciansRepository from '@modules/physicians/repositories/IPhysiciansRepository';
import ICreatePhysicianDTO from '@modules/physicians/dtos/ICreatePhysicianDTO';
import Physician from '../../infra/typeorm/entities/Physician';

/* Patient Repository fake criado para testes. Substitui database;  */
class PhysiciansRepository implements IPhysiciansRepository {
  private physicians: Physician[] = [];
  
  /* ****************************[CREATE]************************************ */
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
  /* ************************************************************************ */

  /* **************************[FIND BY NAME]******************************** */
  // Procura no array de appointments por um que tenha mesmo date;
  public async findByName(name: string): Promise<Physician | undefined> {
    const physician = await this.physicians.find(
      physician => physician.name === name
    );
    return physician;
  }
  /* ************************************************************************ */

  /* *********************[FIND BY SPECIALTY]******************************** */
  // Procura no array de appointments por um que tenha mesmo date;
  public async findBySpecialty(
    specialty: string
    ): Promise<Physician | undefined> {
      const physician = await this.physicians.find(
        physician => physician.medicalSpecialty === specialty
      );
    return physician;
  }
  /* ************************************************************************ */
}

export default PhysiciansRepository;
