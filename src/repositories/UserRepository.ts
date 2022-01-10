import { db } from '../database';

interface Request {
  email: string;
  password: string;
}

const userController = {
  findByEmail: async (email: string) => {
    const [row] = await db('SELECT * FROM users WHERE email = $1', [email]);
    return row;
  },

  findUser: async ({ email, password } : {email: string, password: string}) => {
    const [row] = await db('SELECT * FROM users WHERE (email = $1 AND password = $2)', [email, password]);
    return row;
  },

  execute: async ({
    email, password,
  }: Request) => {
    const [row] = await db(`
      INSERT INTO users(email, password)
      VALUES($1, $2)
      RETURNING *
      `, [email, password]);

    return row;
  },
};

export default userController;
