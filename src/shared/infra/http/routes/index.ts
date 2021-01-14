import { Router } from 'express';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import patientsRouter from '@modules/patients/infra/http/routes/patients.routes';
import physiciansRouter from '@modules/physicians/infra/http/routes/physicians.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/patients', patientsRouter);
routes.use('/physicians', physiciansRouter);

export default routes;
