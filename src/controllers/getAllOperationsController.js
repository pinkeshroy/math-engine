import {prisma} from '../config/prismaClient.js';

export const getAllOperations = async (req, res, next) => {
  try {
    const operations = await prisma.operation.findMany();
    res.json(operations);
  } catch (err) {
    next(err);
  }
};
