import { db } from '../database';

type CreateParams = {
  name: string;
}

const ModuleRepository = {
  findAll: async () => {
    const rows = await db('SELECT * FROM modules ORDER BY name');
    return rows;
  },

  create: async ({ name }: CreateParams) => {
    const [row] = await db('INSERT INTO modules(name) VALUES ($1) RETURNING *', [name]);
    return row;
  },
};

export default ModuleRepository;
