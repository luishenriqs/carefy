import { Router } from 'express';
import PhysiciansController from '../controllers/PhysiciansController';

const physiciansRouter = Router();
const physiciansController = new PhysiciansController();

physiciansRouter.post('/', physiciansController.create);
export default physiciansRouter;
