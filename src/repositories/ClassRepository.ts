import { db } from '../database';

const ClassRepository = {
  findAll: async () => {
    const rows = await db('SELECT * FROM classes ORDER BY name');
    return rows;
  },
};

export default ClassRepository;
