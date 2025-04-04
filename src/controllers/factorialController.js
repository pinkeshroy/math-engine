import {prisma} from '../config/prismaClient.js';
import { isPositiveInteger } from '../utils/validator.js';

export const factorial = async (req, res, next) => {
  try {
    const n = parseInt(req.params.number);
    if (!isPositiveInteger(n)) {
      return res.status(400).json({ error: 'Invalid number' });
    }
    const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
    const result = fact(n);
    const operation = await prisma.operation.create({
      data: {
        type: 'factorial',
        input: n.toString(),
        result: result.toString()
      }
    });
    res.json({ result, operation });
  } catch (err) {
    next(err);
  }
};
