import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import mathRoutes from './routes/mathRoutes.js';
import {errorHandler} from './middleware/errorHandler.js';
import {requestLogger} from './middleware/requestLogger.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(requestLogger); //request logger
app.use('/api', mathRoutes);
app.use(errorHandler);

export default app;
