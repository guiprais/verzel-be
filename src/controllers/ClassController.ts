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

    if (!name) {
      return response.status(400).send({ error: 'Name is required' });
    }

    if (!class_date) {
      return response.status(400).send({ error: 'Date is required' });
    }

    const moduleIdExists = await ModuleRepository.findById(module_id);

    if (!moduleIdExists) {
      return response.status(404).send({ error: 'Module not found' });
    }

    const grade = await ClassRepository.create({ name, module_id, class_date });

    return response.json(grade);
  },

  update: async (request: Request, response: Response) => {
    const { id } = request.params;
    const { name, module_id, class_date } = request.body;

    if (!name) {
      return response.status(404).send({ error: 'Name is required' });
    }

    const classExists = await ClassRepository.findById(id);

    if (!classExists) {
      return response.status(404).send({ error: 'Class not found' });
    }

    const moduleExists = await ModuleRepository.findById(module_id);

    if (!moduleExists) {
      return response.status(404).send({ error: 'Module not found' });
    }

    const grade = await ClassRepository.update(id, { name, module_id, class_date });

    return response.json(grade);
  },

  delete: async (request: Request, response: Response) => {
    const { id } = request.params;

    await ClassRepository.delete(id);

    return response.sendStatus(204);
  },
};

export default ClassController;
