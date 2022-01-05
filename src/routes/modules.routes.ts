import { Router } from 'express';

import ModuleController from '../controllers/ModuleController';
import auth from '../middlewares/auth';

const moduleRouter = Router();

moduleRouter.get('/modules', ModuleController.index);
moduleRouter.post('/modules', auth.private, ModuleController.store);
moduleRouter.put('/modules/:id', auth.private, ModuleController.update);
moduleRouter.delete('/modules/:id', auth.private, ModuleController.delete);

export default moduleRouter;
