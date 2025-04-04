import {prisma} from '../config/prismaClient.js';
import { isValidNumber } from '../utils/validator.js';

export const addition = async (req, res, next) => {
  try {
    const { a, b } = req.body;
    if (!isValidNumber(a) || !isValidNumber(b)) {
      return res.status(400).json({ error: 'Inputs must be numbers' });
    }
    const result = a + b;
    const operation = await prisma.operation.create({
      data: {
        type: 'addition',
        input: JSON.stringify({ a, b }),
        result: result.toString(),
      }
    });
    res.json({ result, operation });
  } catch (err) {
    next(err);
  }
};
