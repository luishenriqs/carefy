import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
    physician_id: string;
    patient_id: string;
    day: string;
    month: string;
    start: string;
    end: string;
}
/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'AppointmentRepository'; */
@injectable()
class EditByPatientIdService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentRepository: IAppointmentsRepository,
  ) {}

  public async execute({ 
    physician_id,
    patient_id,
    day,
    month,
    start,
    end,
    }: IRequest): Promise<Appointment> {
    const apointment = await this.appointmentRepository.findByPatient_Id(
        patient_id
    );


    if (!apointment) {
        throw new AppError('Appointment not found!');
    }

    apointment.physician_id = physician_id;
    apointment.patient_id = patient_id;
    apointment.day = day;
    apointment.month = month;
    apointment.start = start;
    apointment.end = end;

    await this.appointmentRepository.save(apointment);

    return apointment;
  }
}

export default EditByPatientIdService;