import {prisma} from '../config/prismaClient.js';

export const deleteOperation = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.operation.delete({
      where: { id }
    });
    res.json({ message: 'Operation deleted successfully' });
  } catch (err) {
    next(err);
  }
};
