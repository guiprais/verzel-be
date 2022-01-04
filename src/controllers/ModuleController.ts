import { Request, Response } from 'express';

import ModuleRepository from '../repositories/ModuleRepository';

const ModuleController = {
  index: async (_request: Request, response: Response) => {
    const modules = await ModuleRepository.findAll();

    return response.json(modules);
  },

  store: async (request: Request, response: Response) => {
    const { name } = request.body;

    if (!name) {
      return response.status(400).send({ error: 'Name is required' });
    }

    const module = await ModuleRepository.create({ name });

    return response.json(module);
  },

  update: async (request: Request, response: Response) => {
    response.send('update route');
  },

  remove: async (request: Request, response: Response) => {
    response.send('remove route');
  },
};

export default ModuleController;
