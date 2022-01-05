import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { classRouter, moduleRouter, userRouter } from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(classRouter);
app.use(moduleRouter);
app.use(userRouter);

app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`));
