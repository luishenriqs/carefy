import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePhysicianService from '@modules/physicians/services/CreatePhysicianService';
import ShowPhysicianService from '@modules/physicians/services/ShowPhysicianService';
import IndexPhysicianService from '@modules/physicians/services/IndexPhysicianService';
import EditPhysicianService from '@modules/physicians/services/EditPhysicianService';
import DeletePhysicianService from '@modules/physicians/services/DeletePhysicianService';
import ListAppointmensByPhysicianService from '@modules/physicians/services/ListAppointmentsByPhysicianService';

export default class PhysiciansController {

  /* ***********************[CREATE PHYSICIAN]******************************* */
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, medicalSpecialty } = request.body;

    /* O 'container.resolve' injeta uma instância da classe do service
    "CreatePhysicianService" dentro da rota;  */
    const createPhysician = container.resolve(CreatePhysicianService);
    const physician = await createPhysician.execute({
      name,
      medicalSpecialty,
    });
    return response.json(physician);
  }
  /* ************************************************************************ */

  /* *************************[SHOW PHYSICIAN]******************************* */
  public async show(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    /* O 'container.resolve' injeta uma instância da classe do service
    "ShowPhysicianService" dentro da rota;  */
    const showPhysician = container.resolve(ShowPhysicianService);
    const physician = await showPhysician.execute(name);
    return response.json(physician);
  }
  /* ************************************************************************ */

  /* ************************[INDEX PHYSICIAN]******************************* */
  public async index(request: Request, response: Response): Promise<Response> {

    /* O 'container.resolve' injeta uma instância da classe do service
    "IndexPhysicianService" dentro da rota;  */
    const indexPhysician = container.resolve(IndexPhysicianService);
    const physician = await indexPhysician.execute();
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
