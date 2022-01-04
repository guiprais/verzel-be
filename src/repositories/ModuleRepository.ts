import { db } from '../database';

type CreateParams = {
  name: string;
}

const ModuleRepository = {
  findAll: async () => {
    const rows = await db('SELECT * FROM modules ORDER BY name');
    return rows;
  },

  findById: async (id: string) => {
    const [row] = await db('SELECT * FROM modules WHERE id = $1', [id]);
    return row;
  },

  findByModuleId: async (id: string) => {
    const [row] = await db('SELECT * FROM modules WHERE id = $1', [id]);
    return row;
  },

  create: async ({ name }: CreateParams) => {
    const [row] = await db('INSERT INTO modules(name) VALUES ($1) RETURNING *', [name]);
    return row;
  },

  update: async (id: string, { name }: { name: string }) => {
    const [row] = await db('UPDATE modules SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
    return row;
  },

  delete: async (id: string) => {
    const deleteOp = await db('DELETE FROM modules WHERE id = $1', [id]);
    return deleteOp;
  },
};

export default ModuleRepository;
