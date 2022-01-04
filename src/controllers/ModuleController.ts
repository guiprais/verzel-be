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
    const { id } = request.params;
    const { name } = request.body;

    if (!name) {
      return response.status(404).send({ error: 'Name is required' });
    }

    const moduleExists = await ModuleRepository.findById(id);

    if (!moduleExists) {
      return response.status(404).send({ error: 'Module not found' });
    }

    const module = await ModuleRepository.update(id, { name });

    return response.json(module);
  },

  remove: async (request: Request, response: Response) => {
    response.send('remove route');
  },
};

export default ModuleController;
