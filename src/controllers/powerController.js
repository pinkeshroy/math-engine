import {prisma} from '../config/prismaClient.js';
import { isValidNumber } from '../utils/validator.js';

export const power = async (req, res, next) => {
  try {
    const { base, exponent } = req.body;

    if (!isValidNumber(base) || !isValidNumber(exponent)) {
      return res.status(400).json({ error: 'Inputs must be valid numbers' });
    }

    const result = Math.pow(base, exponent);

    const operation = await prisma.operation.create({
      data: {
        type: 'power',
        input: JSON.stringify({ base, exponent }),
        result: result.toString()
      }
    });

    res.json({ result, operation });
  } catch (err) {
    next(err);
  }
};
