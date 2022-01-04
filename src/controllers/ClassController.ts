import { Request, Response } from 'express';

import ClassRepository from '../repositories/ClassRepository';

const ClassController = {
  index: async (_request: Request, response: Response) => {
    const classes = await ClassRepository.findAll();

    response.json(classes);
  },

  store: async (request: Request, response: Response) => {
    response.send('store route');
  },

  update: async (request: Request, response: Response) => {
    response.send('update route');
  },

  remove: async (request: Request, response: Response) => {
    response.send('remove route');
  },
};

export default ClassController;
