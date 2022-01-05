import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';

const userController = {
  register: async (request: Request, response: Response) => {
    const { email, password } = request.body;

    if (!email) {
      return response.status(400).send({ error: 'Email is required' });
    }

    if (!password) {
      return response.status(400).send({ error: 'Password is required' });
    }

    const emailExists = await UserRepository.findByEmail(email);

    if (emailExists) {
      return response.status(404).send({ error: 'This e-mail is already in use' });
    }

    const user = await UserRepository.execute({ email, password });

    return response.status(200).json(user);
  },

  login: async (request: Request, response: Response) => {
    const { email, password } = request.body;

    if (!email) {
      return response.status(400).send({ error: 'Email is required' });
    }

    if (!password) {
      return response.status(400).send({ error: 'Password is required' });
    }

    const emailExists = await UserRepository.findByEmail(email);

    if (!emailExists) {
      return response.status(404).send({ error: 'Incorrect e-mail/password combination.' });
    }

    const passwordExists = await UserRepository.findByPassword(password);

    if (!passwordExists) {
      return response.status(404).send({ error: 'Incorrect e-mail/password combination.' });
    }

    return response.status(200);
  },
};

export default userController;
