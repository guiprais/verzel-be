import { Request, Response } from 'express';

import ClassRepository from '../repositories/ClassRepository';
import ModuleRepository from '../repositories/ModuleRepository';

const ClassController = {
  index: async (_request: Request, response: Response) => {
    const classes = await ClassRepository.findAll();

    return response.json(classes);
  },

  store: async (request: Request, response: Response) => {
    const { name, module_id, class_date } = request.body;

    if (!name || !module_id) {
      return response.status(400).send({ error: 'Name/moduleId is required' });
    }

    const moduleIdExists = await ModuleRepository.findByModuleId(module_id);

    if (!moduleIdExists) {
      return response.status(404).send({ error: 'Module not found' });
    }

    const grade = await ClassRepository.create({ name, module_id, class_date });

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
