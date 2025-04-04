import {prisma} from '../config/prismaClient.js';
import { isPositiveInteger } from '../utils/validator.js';

export const fibonacci = async (req, res, next) => {
  try {
    const count = parseInt(req.params.count);
    if (!isPositiveInteger(count) || count < 1) {
      return res.status(400).json({ error: 'Count must be >= 1' });
    }

    const fib = [0, 1];
    for (let i = 2; i < count; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }

    const result = fib.slice(0, count);
    const operation = await prisma.operation.create({
      data: {
        type: 'fibonacci',
        input: count.toString(),
        result: JSON.stringify(result)
      }
    });

    res.json({ result, operation });
  } catch (err) {
    next(err);
  }
};
