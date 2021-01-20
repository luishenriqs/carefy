import { Router } from 'express';
import PhysiciansController from '../controllers/PhysiciansController';

const physiciansRouter = Router();
const physiciansController = new PhysiciansController();

physiciansRouter.post('/', physiciansController.create);
physiciansRouter.get('/index', physiciansController.index);
physiciansRouter.get('/showbyname', physiciansController.showByName);
physiciansRouter.get('/showbyspecialty', physiciansController.showBySpecialty);
physiciansRouter.patch('/edit', physiciansController.edit);
physiciansRouter.delete('/delete', physiciansController.delete);
physiciansRouter.get('/list', physiciansController.list);
export default physiciansRouter;
