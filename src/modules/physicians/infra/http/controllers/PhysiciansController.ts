import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePhysicianService from '@modules/physicians/services/CreatePhysicianService';
import ShowPhysicianByNameService from '@modules/physicians/services/ShowPhysicianByNameService';
import ShowPhysicianBySpecialtyService from '@modules/physicians/services/ShowPhysicianBySpecialtyService';
import IndexPhysicianService from '@modules/physicians/services/IndexPhysicianService';
import EditPhysicianService from '@modules/physicians/services/EditPhysicianService';
import DeletePhysicianService from '@modules/physicians/services/DeletePhysicianService';
import ListAppointmensByPhysicianService from '@modules/physicians/services/ListAppointmentsByPhysicianService';

/* O 'container.resolve' injeta uma instância da classe do service
chamado dentro da rota;  */
export default class PhysiciansController {

  /* ***********************[CREATE PHYSICIAN]******************************* */
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, medicalSpecialty } = request.body;

    console.log(name, medicalSpecialty)

    const createPhysician = container.resolve(CreatePhysicianService);
    const physician = await createPhysician.execute({
      name,
      medicalSpecialty,
    });
    return response.json(physician);
  }
  /* ************************************************************************ */

  /* ************************[INDEX PHYSICIAN]******************************* */
  public async index(request: Request, response: Response): Promise<Response> {

    const indexPhysician = container.resolve(IndexPhysicianService);
    const physician = await indexPhysician.execute();
    return response.json(physician);
  }
  /* ************************************************************************ */

  /* *********************[SHOW PHYSICIAN BY NAME]*************************** */
  public async showByName(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;
    const showPhysician = container.resolve(ShowPhysicianByNameService);
    const physician = await showPhysician.execute(name);
    
    return response.json(physician);
  }
  /* ************************************************************************ */

  /* *******************[SHOW PHYSICIAN BY SPECIALTY]************************ */
  public async showBySpecialty(request: Request, response: Response): Promise<Response> {
    const { medicalSpecialty } = request.query;
    const showPhysician = container.resolve(ShowPhysicianBySpecialtyService);
    const physician = await showPhysician.execute(medicalSpecialty);
    
    return response.json(physician);
  }
  /* ************************************************************************ */

  /* ************************[EDIT PHYSICIAN]******************************** */
  public async edit(request: Request, response: Response): Promise<Response> {
    const { id, name, medicalSpecialty } = request.body;

    /* O 'container.resolve' injeta uma instância da classe do service
    "EditPhysicianService" dentro da rota;  */
    const editPhysician = container.resolve(EditPhysicianService);
    const physician = await editPhysician.execute({
      id,
      name,
      medicalSpecialty,
    });
    return response.json(physician);
  }
  /* ************************************************************************ */

  /* ************************[DELETE PHYSICIAN]****************************** */
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    /* O 'container.resolve' injeta uma instância da classe do service
    "DeletePhysicianService" dentro da rota;  */
    const deletePhysician = container.resolve(DeletePhysicianService);
    await deletePhysician.execute(id);
    return response.status(200).json();
  }
  /* ************************************************************************ */

  /* *************************[LIST PHYSICIAN]******************************* */
  public async list(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    /* O 'container.resolve' injeta uma instância da classe do service
    "ListAppointmensByPhysicianService" dentro da rota;  */
    const listAppointment = container.resolve(ListAppointmensByPhysicianService);
    const appointment = await listAppointment.execute(name);
    return response.json(appointment);
  }
  /* ************************************************************************ */

}
