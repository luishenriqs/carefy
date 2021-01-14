import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePatientService from '@modules/patients/services/CreatePatientService';
import ShowPatientService from '@modules/patients/services/ShowPatientService';
import IndexPatientService from '@modules/patients/services/IndexPatientService';
import EditPatientService from '@modules/patients/services/EditPatientService';
import DeletePatientService from '@modules/patients/services/DeletePatientService';

export default class PatientsController {

  /* ************************[CREATE PATIENT]******************************** */
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, preferredPhone, secondaryPhone } = request.body;

    /* O 'container.resolve' injeta uma instância da classe do service
    "CreatePatientService" dentro da rota;  */
    const createPatient = container.resolve(CreatePatientService);
    const patient = await createPatient.execute({
      name,
      preferredPhone,
      secondaryPhone,
    });
    return response.json(patient);
  }
  /* ************************************************************************ */

  /*  *************************[SHOW PATIENT]******************************** */
  public async show(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    /* O 'container.resolve' injeta uma instância da classe do service
    "ShowPatientService" dentro da rota;  */
    const showPatient = container.resolve(ShowPatientService);
    const patients = await showPatient.execute(name);
    return response.json(patients);
  }
  /* ************************************************************************ */

  /*  ************************[INDEX PATIENT]******************************** */
  public async index(request: Request, response: Response): Promise<Response> {

    /* O 'container.resolve' injeta uma instância da classe do service
    "ShowPatientService" dentro da rota;  */
    const indexPatient = container.resolve(IndexPatientService);
    const patients = await indexPatient.execute();
    return response.json(patients);
  }
  /* ************************************************************************ */

  /*  ************************[EDIT PATIENT]******************************** */
  public async edit(request: Request, response: Response): Promise<Response> {
    const { id, name, preferredPhone, secondaryPhone } = request.body;

    /* O 'container.resolve' injeta uma instância da classe do service
    "ShowPatientService" dentro da rota;  */
    const editPatient = container.resolve(EditPatientService);
    const patient = await editPatient.execute({
      id,
      name,
      preferredPhone,
      secondaryPhone,
    });
    return response.json(patient);
  }
  /* ************************************************************************ */

  /*  ************************[DELETE PATIENT]******************************* */
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    /* O 'container.resolve' injeta uma instância da classe do service
    "DeletePatientService" dentro da rota;  */
    const deletePatient = container.resolve(DeletePatientService);
    await deletePatient.execute(id);
    return response.status(200).json();
  }
  /* ************************************************************************ */
}
