import { db } from '../database';

type CreateParams = {
  name: string;
  module_id: string;
  class_date: string;
}

type UpdateParams = {
  name: string;
  module_id: string;
  class_date: string;
}

const ClassRepository = {
  findAll: async () => {
    const rows = await db('SELECT * FROM classes ORDER BY name');
    return rows;
  },

  findById: async (id: string) => {
    const [row] = await db('SELECT * FROM classes WHERE id = $1', [id]);
    return row;
  },

  create: async ({ name, module_id, class_date }: CreateParams) => {
    const [row] = await db('INSERT INTO classes(name, module_id, class_date) VALUES ($1, $2, $3) RETURNING *', [name, module_id, class_date]);
    return row;
  },

  update: async (id: string, { name, module_id, class_date }: UpdateParams) => {
    const [row] = await db(`
    UPDATE classes
    SET name = $1, module_id = $2, class_date = $3
    WHERE id = $4
    RETURNING *
    `, [name, module_id, class_date, id]);
    return row;
  },
};

export default ClassRepository;
