import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.send({ message: 'Hello World!'})
})

app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`))
