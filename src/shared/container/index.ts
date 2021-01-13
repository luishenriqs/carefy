/* ARQUIVOS USADOS PARA INJEÇÕES DE DEPENDÊNCIAS */
import { container } from 'tsyringe';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';


/* O container.registerSingleton retorna uma instância do repositório que 
foi chamado; */
container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);
