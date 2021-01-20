import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ShowAppointmentByPhysicianService from '@modules/appointments/services/ShowAppointmentByPhysicianService';
import ShowAppointmentByPatientService from '@modules/appointments/services/ShowAppointmentByPatientService';
import IndexAppointmentService from '@modules/appointments/services/IndexAppointmentService';
import EditAppointmentService from '@modules/appointments/services/EditByPatientIdService';
import DeleteAppointmentService from '@modules/appointments/services/DeleteAppointmentService';

export default class AppointmentsController {

  /*  ***********************[CREATE PATIENT]******************************** */
  public async create(request: Request, response: Response): Promise<Response> {
    const { physician_id, patient_id, day, month, start, end } = request.body;

    /* O 'container.resolve' injeta uma instância uma classe do service
    "CreateAppointmentService" dentro da rota;  */
    const createAppointment = container.resolve(CreateAppointmentService);
    const appointment = await createAppointment.execute({
      physician_id,
      patient_id,
      day,
      month,
      start,
      end,
    });
    return response.json(appointment);
  }
  /* ************************************************************************ */

  /*  *****************[SHOW APPOINTMENTS BY PHYSICIAN]********************** */
  public async showByPhysician(request: Request, response: Response): Promise<Response> {
    const { physician } = request.query;

    const showAppointments = container.resolve(ShowAppointmentByPhysicianService);
    const appointments = await showAppointments.execute(physician);
    return response.json(appointments);
  }
  /* ************************************************************************ */

  /*  ******************[SHOW APPOINTMENTS BY PATIENT]*********************** */
  public async showByPatient(request: Request, response: Response): Promise<Response> {
    const { patient } = request.query;

    const showAppointments = container.resolve(ShowAppointmentByPatientService);
    const appointments = await showAppointments.execute(patient);
    return response.json(appointments);
  }
  /* ************************************************************************ */

  /*  *********************[INDEX APPOINTMENTS]****************************** */
  public async index(request: Request, response: Response): Promise<Response> {

  /* O 'container.resolve' injeta uma instância da classe do service
  "IndexAppointmentService" dentro da rota;  */
  const indexAppointment = container.resolve(IndexAppointmentService);
  const appointments = await indexAppointment.execute();
  return response.json(appointments);
  }
  /* ************************************************************************ */

  /* **********************[EDIT APPOINTMENTS]******************************* */
  public async edit(request: Request, response: Response): Promise<Response> {
  const {     
    physician_id,
    patient_id,
    day,
    month,
    start,
    end,
  } = request.body;

  /* O 'container.resolve' injeta uma instância da classe do service
  "EditAppointmentService" dentro da rota;  */
  const editAppointment = container.resolve(EditAppointmentService);
  const appointment = await editAppointment.execute({
    physician_id,
    patient_id,
    day,
    month,
    start,
    end,
  });
  return response.json(appointment);
  }
  /* ************************************************************************ */

  /* **********************[DELETE APPOINTMENTS]***************************** */
  public async delete(request: Request, response: Response): Promise<Response> {
  const { id } = request.body;

  /* O 'container.resolve' injeta uma instância da classe do service
  "DeleteAppointmentService" dentro da rota;  */
  const deleteAppointment = container.resolve(DeleteAppointmentService);
  await deleteAppointment.execute(id);
  return response.status(200).json();
  }
  /* ************************************************************************ */
}
