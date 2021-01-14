import { Router } from 'express';
import PatientsController from '../controllers/PatientsController';

const patientsRouter = Router();
const patientsController = new PatientsController();

patientsRouter.post('/', patientsController.create);
patientsRouter.get('/show', patientsController.show);
patientsRouter.get('/index', patientsController.index);
patientsRouter.patch('/edit', patientsController.edit);
patientsRouter.delete('/delete', patientsController.delete);
export default patientsRouter;
