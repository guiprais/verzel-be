import express from 'express';
import dotenv from 'dotenv';

import { classRouter, moduleRouter } from './routes';

dotenv.config();

const app = express();

app.use(express.json());

app.use(classRouter);
app.use(moduleRouter);

app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`));
