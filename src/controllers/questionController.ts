import { Request, Response } from 'express';
import * as questionService from '../services/questionService';
import * as answerService from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  const question = req.body;

  await questionService.createQuestion(question);

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const { id } = req.params;
  const answer = req.body;

  await answerService.createAnswer(Number(id), answer);

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getAllQuestions();

  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const questions = await questionService.getQuestionById(Number(id));

  res.status(200).send(questions);
}
