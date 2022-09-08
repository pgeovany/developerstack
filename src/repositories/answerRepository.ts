import prisma from '../config/database';
import { Answer } from '@prisma/client';
import * as questionService from '../services/questionService';

export type InsertAnswerData = Omit<Answer, 'id'>;

async function insert(questionId: number, answer: InsertAnswerData) {
  await questionService.getQuestionById(questionId);

  await prisma.answer.create({
    data: {
      ...answer,
      questionId,
    },
  });
}

export { insert };
