import express from 'express';

import { addition } from '../controllers/additionController.js';
import { factorial } from '../controllers/factorialController.js';
import { fibonacci } from '../controllers/fibonacciController.js';
import { power } from '../controllers/powerController.js';
import { isPrime } from '../controllers/isPrimeController.js';
import { getAllOperations } from '../controllers/getAllOperationsController.js';
import { deleteOperation } from '../controllers/deleteOperationController.js';

const router = express.Router();

// Math Ops
router.post('/addition', addition);
router.get('/factorial/:number', factorial);
router.get('/fibonacci/:count', fibonacci);
router.post('/power', power);
router.post('/is-prime', isPrime);

// CRUD
router.get('/operations', getAllOperations);
router.delete('/operations/:id', deleteOperation);

export default router;
