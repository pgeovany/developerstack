import * as questionRepository from '../repositories/questionRepository';

async function createQuestion(question: questionRepository.InsertQuestionData) {
  await questionRepository.insert(question);
}

async function getQuestionById(id: number) {
  return await questionRepository.findById(id);
}

async function getAllQuestions() {
  return await questionRepository.findAll();
}

export { createQuestion, getQuestionById, getAllQuestions };
