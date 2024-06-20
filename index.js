import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import mongoose from 'mongoose';

import routerManager from './routes/index.js';

const app = express();

// set security HTTP headers
app.use(helmet());

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log('Connected to MongoDB.....');
});

// enable cors
app.use(cors());
app.options('*', cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send('Connected...');
});

app.use('/', routerManager);


app.listen(4000, () => {
  console.log(`Listening to port ${4000}`);
});

export default app;