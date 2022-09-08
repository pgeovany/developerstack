import prisma from '../config/database';
import { Question } from '@prisma/client';

export type InsertQuestionData = Omit<Question, 'id'>;

async function insert(question: InsertQuestionData) {
  await prisma.question.create({ data: question });
}

async function findById(id: number) {
  return await prisma.question.findUniqueOrThrow({
    where: { id },
    include: {
      answers: {
        select: {
          answeredBy: true,
          answer: true,
        },
      },
    },
  });
}

async function findAll() {
  return await prisma.question.findMany();
}

export { insert, findById, findAll };
