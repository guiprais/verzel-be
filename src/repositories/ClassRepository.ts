import { db } from '../database';

type CreateParams = {
  name: string;
  module_id: string;
  class_date: string;
}

const ClassRepository = {
  findAll: async () => {
    const rows = await db('SELECT * FROM classes ORDER BY name');
    return rows;
  },

  create: async ({ name, module_id, class_date }: CreateParams) => {
    const [row] = await db('INSERT INTO classes(name, module_id, class_date) VALUES ($1, $2, $3) RETURNING *', [name, module_id, class_date]);
    return row;
  },
};

export default ClassRepository;
