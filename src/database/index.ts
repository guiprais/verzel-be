import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'verzel',
});

client.connect();

export const query = async (query: string, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
