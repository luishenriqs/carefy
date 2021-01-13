import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id, physician_id, patient_id, date } = request.body;
    const parsedDate = parseISO(date);
    /* O 'container.resolve' injeta uma instância uma classe do service
    "CreateAppointmentService" dentro da rota;  */
    const createAppointment = container.resolve(CreateAppointmentService);
    const appointment = await createAppointment.execute({
      id,
      physician_id,
      patient_id,
      date: parsedDate,
    });
    return response.json(appointment);
  }
}
