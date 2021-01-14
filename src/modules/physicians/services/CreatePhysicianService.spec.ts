import AppError from '@shared/errors/AppError';
import FakePhysiciansRepository from '../repositories/fakes/FakePhysiciansRepository';
import CreatePhysicianService from './CreatePhysicianService';

let fakePhysiciansRepository: FakePhysiciansRepository;
let createPhysician: CreatePhysicianService;

describe('CreateAppointment', () => {
  /* ************************************************************************ */
  /* O 'beforeEach' executa de forma automática todas as suas instruções
  antes da execução de cada teste. Desta forma evita-se de repetir o mesmo
  código em todos os testes; */
  beforeEach(() => {
    fakePhysiciansRepository = new FakePhysiciansRepository();
    createPhysician = new CreatePhysicianService(
      fakePhysiciansRepository,
    );
  });
  /* ************************************************************************ */

  /* ************************************************************************ */
  /* Testa a criação de appointments pelo service CreateAppointmentService */
  it('should be able to create a new appointment', async () => {
    // Criando um novo 'appointment';
    const physician = await createPhysician.execute({
      name: '999999',
      medicalSpecialty: '888888',
    });

    await expect(physician.id).toBe('123123123');
    await expect(physician.name).toBe('999999');
    await expect(physician.medicalSpecialty).toBe('888888');
  });
  /* ************************************************************************ */
});
