import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
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

    const token = sign({ id: user.id, email: user.email }, process.env.JWT_SECRET_KEY as string, {
      subject: user.id,
      expiresIn: '1d',
    });

    return response.status(200).json({ user, token });
  },

  login: async (request: Request, response: Response) => {
    const { email, password } = request.body;

    if (!email) {
      return response.status(400).send({ error: 'Email is required' });
    }

    if (!password) {
      return response.status(400).send({ error: 'Password is required' });
    }

    const user = await UserRepository.findByEmail(email);

    if (!user) {
      return response.status(404).send({ error: 'Incorrect e-mail/password combination.' });
    }

    const passwordExists = await UserRepository.findByPassword(password);

    if (!passwordExists) {
      return response.status(404).send({ error: 'Incorrect e-mail/password combination.' });
    }

    const token = sign({ id: user.id, email: user.email }, '9f05aa4202e4ce8d6a72511dc735cce9', {
      subject: user.id,
      expiresIn: '1d',
    });

    return response.status(200).json({ email: user.email, token });
  },
};

export default userController;
