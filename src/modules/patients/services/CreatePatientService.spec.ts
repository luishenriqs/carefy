// import AppError from '@shared/errors/AppError';
import FakePatientsRepository from '../repositories/fakes/FakePatientsRepository';
import CreatePatientService from './CreatePatientService';

let fakePatientsRepository: FakePatientsRepository;
let createPatient: CreatePatientService;

describe('CreatePatient', () => {
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
  /* Testa a criação de um novo paciente pelo service "CreatePatientService" */
  it('should be able to create a new patient', async () => {
    // Criando um novo paciente;
    const patient = await createPatient.execute({
      name: 'Jonh Doe',
      preferredPhone: '999999999',
      secondaryPhone: '888888888',
    });

    await expect(patient.name).toBe('Jonh Doe');
    await expect(patient.preferredPhone).toBe('999999999');
    await expect(patient.secondaryPhone).toBe('888888888');
  });
  /* ************************************************************************ */
});
