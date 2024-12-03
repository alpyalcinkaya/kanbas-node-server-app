import Database from "../Database/index.js";


export const createQuestion = (question) => {
  const newQuestion = { ...question, _id: Date.now().toString() };
  Database.questions = [...(Database.questions || []), newQuestion];
  return newQuestion;
};

export const findQuestionById = (questionId) => {
  const question = (Database.questions || []).find((q) => q._id === questionId);
  if (!question) {
    throw new Error(`Question with ID ${questionId} not found.`);
  }
  return question;
};
/////
export const findQuestionsByQuizId = (quizId) => {
   console.log("Quiz id to be used to find questions", quizId);
  const questions = (Database.questions).filter((q) => Number(q.quizId) === Number(quizId));
  console.log("Questions for the quiz: ", questions);
  if (questions.length === 0) {
    throw new Error(`Questions for Quiz ID ${quizId} not found.`);
  }
  return questions;
};

export const updateQuestion = (questionId, questionUpdates) => {
  const question = Database.questions.find((q) => q._id === questionId);

  if (!question) {
    throw new Error(`Question with ID ${questionId} not found.`);
  }

  Object.assign(question, questionUpdates);
  return question;
};

export const deleteQuestion = (questionId) => {
  const questionIndex = Database.questions.findIndex((q) => q._id === questionId);

  if (questionIndex !== -1) {
    Database.questions.splice(questionIndex, 1);
    return true;
  } else {
    return false; // Question not found
  }

};