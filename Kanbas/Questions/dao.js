import Database from "../Database/index.js";


export const createQuestion = (question) => {
  if (!question.title || !question.question || !question.quizId) {
    throw new Error('Invalid question data. Title, question text, and quizId are required.');
  }
  
  const newQuestion = { ...question, _id: Date.now().toString() };
  Database.questions = [...(Database.questions || []), newQuestion];
  return newQuestion;
};

export const findQuestionById = (questionId) => {
  const question = (Database.questions || []).find((q) => q._id === questionId);
  if (!question) {
    throw new Error(`Question with ID ${questionId} NOT found.`);
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
  console.log(questionId, typeof(questionId), "dao");
  const question = Database.questions.find((q) => q._id === Number(questionId));
  console.log(q);

  if (!question) {
    throw new Error(`Question with ID ${questionId} not found.`);
  }

  Object.assign(question, questionUpdates);
  return question;
};


export const deleteQuestion = (questionId) => {
  console.log("Attempting to delete question with ID:", questionId);
  console.log("Current questions in database:", Database.questions);

  // Find and delete the question from Database.questions
  const questionIndex = Database.questions.findIndex((q) => q._id == questionId);

  if (questionIndex !== -1) {
    // Question found, delete it from Database.questions
    console.log(`Deleting question from Database.questions at index ${questionIndex}`);
    const [deletedQuestion] = Database.questions.splice(questionIndex, 1);

    // Find the quiz that this question belongs to and remove it from the quiz's questions list
    if (deletedQuestion.quizId) {
      const quiz = Database.quizzes.find((quiz) => quiz._id == deletedQuestion.quizId);
      if (quiz) {
        quiz.questions = quiz.questions.filter((qId) => qId !== questionId);
        console.log(`Updated quiz ${quiz._id} by removing question ${questionId}`);
      }
    }

    console.log("Question deleted successfully. Updated questions:", Database.questions);
    return true;
  } else {
    console.error(`Question with ID ${questionId} not found.`);
    throw new Error(`Question with ID ${questionId} not found.`);
  }
};

