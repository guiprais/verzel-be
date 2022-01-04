import { Router } from 'express';

import ModuleController from '../controllers/ModuleController';

const moduleRouter = Router();

moduleRouter.get('/modules', ModuleController.index);
moduleRouter.post('/modules', ModuleController.store);
moduleRouter.put('/modules/:id', ModuleController.update);
moduleRouter.delete('/modules/:id', ModuleController.delete);

export default moduleRouter;
