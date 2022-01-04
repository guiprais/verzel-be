import { Router } from 'express';

import ClassController from '../controllers/ClassController';

const classRouter = Router();

classRouter.get('/classes', ClassController.index);

export default classRouter;
