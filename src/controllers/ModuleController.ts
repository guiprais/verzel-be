import { Request, Response } from 'express';

const index = async (request: Request, response: Response) => {
  response.json('index route');
};

const store = async (request: Request, response: Response) => {
  response.send('store route');
};

const update = async (request: Request, response: Response) => {
  response.send('update route');
};

const remove = async (request: Request, response: Response) => {
  response.send('remove route');
};

export {
  index, store, update, remove,
};
