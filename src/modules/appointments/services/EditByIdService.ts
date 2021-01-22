import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
    id: string;
    physician: string;
    patient: string;
    day: string;
    month: string;
    start: string;
    end: string;
}

@injectable()
class EditByIdService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentRepository: IAppointmentsRepository,
  ) {}

  public async execute({ 
    id,
    physician,
    patient,
    day,
    month,
    start,
    end,
    }: IRequest): Promise<Appointment> {
    const apointment = await this.appointmentRepository.findById(
        id,
    );


    if (!apointment) {
        throw new AppError('Appointment not found!');
    }

    apointment[0].physician = physician;
    apointment[0].patient = patient;
    apointment[0].day = day;
    apointment[0].month = month;
    apointment[0].start = start;
    apointment[0].end = end;

    await this.appointmentRepository.save(apointment[0]);

    return apointment[0];
  }
}

export default EditByIdService;