import { Router } from 'express';

import ClassController from '../controllers/ClassController';
import auth from '../middlewares/auth';

const classRouter = Router();

classRouter.get('/classes', ClassController.index);
classRouter.post('/classes', auth.private, ClassController.store);
classRouter.put('/classes/:id', auth.private, ClassController.update);
classRouter.delete('/classes/:id', auth.private, ClassController.delete);

export default classRouter;
