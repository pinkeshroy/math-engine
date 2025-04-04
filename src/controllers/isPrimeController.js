import {prisma} from '../config/prismaClient.js';
import { isPositiveInteger } from '../utils/validator.js';

export const isPrime = async (req, res, next) => {
  try {
    const { number } = req.body;

    if (!isPositiveInteger(number)) {
      return res.status(400).json({ error: 'Input must be a positive integer' });
    }

    const checkPrime = (n) => {
      if (n < 2) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    };

    const result = checkPrime(number);

    const operation = await prisma.operation.create({
      data: {
        type: 'is-prime',
        input: number.toString(),
        result: result.toString()
      }
    });

    res.json({ result, operation });
  } catch (err) {
    next(err);
  }
};
