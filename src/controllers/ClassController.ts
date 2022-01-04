import { Request, Response } from 'express';

import ClassRepository from '../repositories/ClassRepository';

const ClassController = {
  index: async (_request: Request, response: Response) => {
    const classes = await ClassRepository.findAll();

    return response.json(classes);
  },

  store: async (request: Request, response: Response) => {
    const { name, module } = request.body;

    if (!name || !module) {
      return response.status(400).send({ error: 'Name/module is required' });
    }

    const grade = await ClassRepository.create({ name, module });

    return response.json(grade);
  },

  update: async (request: Request, response: Response) => {
    response.send('update route');
  },

  remove: async (request: Request, response: Response) => {
    response.send('remove route');
  },
};

export default ClassController;
