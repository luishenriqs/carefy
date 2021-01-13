import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  /* ************************************************************************ */
  /* O 'beforeEach' executa de forma automática todas as suas instruções
  antes da execução de cada teste. Desta forma evita-se de repetir o mesmo
  código em todos os testes; */
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });
  /* ************************************************************************ */

  /* ************************************************************************ */
  /* Testa a criação de appointments pelo service CreateAppointmentService */
  it('should be able to create a new appointment', async () => {
    // Criando um novo 'appointment';
    const appointment = await createAppointment.execute({
      id: '123123123',
      physician_id: '999999',
      patient_id: '888888',
      date: new Date(),
    });

    await expect(appointment.id).toBe('123123123');
    await expect(appointment.physician_id).toBe('999999');
    await expect(appointment.patient_id).toBe('888888');
  });
  /* ************************************************************************ */
});
