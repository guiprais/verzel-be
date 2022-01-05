import { Router } from 'express';

import UserController from '../controllers/UserController';

const userRouter = Router();

userRouter.get('/login', UserController.login);
userRouter.post('/login', UserController.register);

export default userRouter;
