import { Router } from 'express';
import PatientsController from '../controllers/PatientsController';

const patientsRouter = Router();
const patientsController = new PatientsController();

patientsRouter.post('/', patientsController.create);
export default patientsRouter;
