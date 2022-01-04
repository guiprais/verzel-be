import { Router } from 'express';

import ModuleController from '../controllers/ModuleController';

const moduleRouter = Router();

moduleRouter.get('/modules', ModuleController.index);
moduleRouter.post('/modules', ModuleController.store);

export default moduleRouter;
