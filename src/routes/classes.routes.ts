import { Router } from 'express';

import ClassController from '../controllers/ClassController';

const classRouter = Router();

classRouter.get('/classes', ClassController.index);
classRouter.post('/classes', ClassController.store);
classRouter.put('/classes/:id', ClassController.update);

export default classRouter;
