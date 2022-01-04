import { db } from '../database';

type CreateParams = {
  name: string;
  module: string;
}

const ClassRepository = {
  findAll: async () => {
    const rows = await db('SELECT * FROM classes ORDER BY name');
    return rows;
  },

  create: async ({ name, module }: CreateParams) => {
    const [row] = await db('INSERT INTO classes(name, module) VALUES ($1, $2) RETURNING *', [name, module]);
    return row;
  },
};

export default ClassRepository;
