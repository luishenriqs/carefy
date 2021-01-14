import { Router } from 'express';
import PhysiciansController from '../controllers/PhysiciansController';

const physiciansRouter = Router();
const physiciansController = new PhysiciansController();

physiciansRouter.post('/', physiciansController.create);
physiciansRouter.get('/show', physiciansController.show);
physiciansRouter.get('/index', physiciansController.index);
physiciansRouter.patch('/edit', physiciansController.edit);
physiciansRouter.delete('/delete', physiciansController.delete);
export default physiciansRouter;
