import { getRepository, Repository } from 'typeorm';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import Appointment from '../entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  /* *****************************[CREATE]*********************************** */
  public async create({
    physician_id,
    patient_id,
    day,
    month,
    start,
    end,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = await this.ormRepository.create({
      physician_id,
      patient_id,
      day,
      month,
      start,
      end,
    });
    await this.ormRepository.save(appointment);
    return appointment;
  }
  /* ************************************************************************ */

  /* ******************************[SAVE]************************************ */
  public async save(appointment: Appointment): Promise<Appointment> {
    return this.ormRepository.save(appointment);
  }
  /* ************************************************************************ */

  /* ************************[FIND BY PATIENT]***************************** */
  public async findByPatient_Id(patient_id: string): Promise<Appointment | undefined> {
    const foundAppointment = await this.ormRepository.findOne({
      where: { patient_id },
    });
  
    return foundAppointment;
  }
  /* ********************************************************************** */

  /* **********************[FIND BY PHYSICIAN]***************************** */
  public async findByPhysician_Id(physician_id: string): Promise<Appointment | undefined> {
    const foundAppointment = await this.ormRepository.findOne({
      where: { physician_id },
    });
  
    return foundAppointment;
  }
  /* ************************************************************************ */
  
  /* ***************************[FIND BY DAY]******************************** */
  public async findByDay(day: string): Promise<Appointment | undefined> {
    const foundAppointment = await this.ormRepository.findOne({
      where: { day },
    });
  
    return foundAppointment;
  }
  /* ************************************************************************ */

  /* ****************************[FIND ALL]********************************** */
  public async findAll(): Promise<Appointment | undefined> {
    const allAppointments = await this.ormRepository.find();

    return allAppointments;
  }
  /* ************************************************************************ */

  /* *****************************[DELETE]*********************************** */
  public async delete(id: string): Promise<void> {
    const removedAppointment = await this.ormRepository.findOne({
      where: { id },
    });
    if (removedAppointment) await this.ormRepository.remove(removedAppointment);
  
    return;
  }
  /* ************************************************************************ */
}

export default AppointmentsRepository;
