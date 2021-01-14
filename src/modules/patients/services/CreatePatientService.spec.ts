import AppError from '@shared/errors/AppError';
import FakePatientsRepository from '../repositories/fakes/FakePatientsRepository';
import CreatePatientService from './CreatePatientService';

let fakePatientsRepository: FakePatientsRepository;
let createPatient: CreatePatientService;

describe('CreateAppointment', () => {
  /* ************************************************************************ */
  /* O 'beforeEach' executa de forma automática todas as suas instruções
  antes da execução de cada teste. Desta forma evita-se de repetir o mesmo
  código em todos os testes; */
  beforeEach(() => {
    fakePatientsRepository = new FakePatientsRepository();
    createPatient = new CreatePatientService(
      fakePatientsRepository,
    );
  });
  /* ************************************************************************ */

  /* ************************************************************************ */
  /* Testa a criação de appointments pelo service CreateAppointmentService */
  it('should be able to create a new appointment', async () => {
    // Criando um novo 'appointment';
    const appointment = await createPatient.execute({
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
