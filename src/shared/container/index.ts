/* ARQUIVOS USADOS PARA INJEÇÕES DE DEPENDÊNCIAS */
import { container } from 'tsyringe';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IPatientsRepository from '@modules/patients/repositories/IPatientsRepository';
import PatientsRepository from '@modules/patients/infra/typeorm/repositories/PatientsRepository';

import IPhysiciansRepository from '@modules/physicians/repositories/IPhysiciansRepository';
import PhysiciansRepository from '@modules/physicians/infra/typeorm/repositories/PhysiciansRepository';

/* O container.registerSingleton retorna uma instância do repositório que 
foi chamado; */
container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

/* O container.registerSingleton retorna uma instância do repositório que 
foi chamado; */
container.registerSingleton<IPatientsRepository>(
  'PatientsRepository',
  PatientsRepository,
);

/* O container.registerSingleton retorna uma instância do repositório que 
foi chamado; */
container.registerSingleton<IPhysiciansRepository>(
  'PhysiciansRepository',
  PhysiciansRepository,
);