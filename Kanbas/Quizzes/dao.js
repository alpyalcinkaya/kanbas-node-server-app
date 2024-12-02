import Database from "../Database/index.js";
// quizzesDao.js


import { findQuestionById } from "../Questions/dao.js";

export const createQuiz = (quiz) => {
  const newQuiz = { ...quiz, _id: Date.now().toString(), questionIds: [] };
  Database.quizzes = [...Database.quizzes, newQuiz];
  return newQuiz;
};

export const findQuizzesForCourse = (courseId) => {
  return Database.quizzes.filter((quiz) => quiz.course === courseId);
};

export const findQuizById = (courseId, quizId) => {
  const quiz = Database.quizzes.find(
    (quiz) => quiz._id === quizId && quiz.course === courseId
  );

  if (!quiz) {
    throw new Error(`Quiz with ID ${quizId} not found in course ${courseId}`);
  }

  // Fetch associated questions
  quiz.questions = quiz.questionIds
    ? quiz.questionIds.map((qid) => findQuestionById(qid))
    : [];

  return quiz;
};

export const updateQuiz = (quizId, quizUpdates) => {
  const quiz = Database.quizzes.find((quiz) => quiz._id === quizId);

  if (!quiz) {
    throw new Error(`Quiz with ID ${quizId} not found.`);
  }

  Object.assign(quiz, quizUpdates);
  return quiz;
};

export const deleteQuiz = (quizId) => {
  const quizIndex = Database.quizzes.findIndex((q) => q._id === quizId);

  if (quizIndex !== -1) {
    Database.quizzes.splice(quizIndex, 1);
    return true;
  } else {
    return false; // Quiz not found
  }
};

export const addQuestionToQuiz = (quizId, questionId) => {
  const quiz = Database.quizzes.find((q) => q._id === quizId);

  if (!quiz) {
    throw new Error(`Quiz with ID ${quizId} not found`);
  }

  quiz.questionIds = quiz.questionIds || [];
  quiz.questionIds.push(questionId);

  return quiz;
};
