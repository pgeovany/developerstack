import * as answerRepository from '../repositories/answerRepository';

async function createAnswer(
  id: number,
  question: answerRepository.InsertAnswerData
) {
  await answerRepository.insert(id, question);
}

export { createAnswer };
