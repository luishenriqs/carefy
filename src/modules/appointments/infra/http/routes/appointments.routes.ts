import { Router } from 'express';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.get('/show', appointmentsController.show);
appointmentsRouter.get('/index', appointmentsController.index);
appointmentsRouter.patch('/edit', appointmentsController.edit);
appointmentsRouter.delete('/delete', appointmentsController.delete);
export default appointmentsRouter;
