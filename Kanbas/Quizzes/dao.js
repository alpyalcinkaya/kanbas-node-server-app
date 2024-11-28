import Database from "../Database/index.js";

// Create a quiz and add it to the database
export function createQuiz(quiz) {
  const newQuiz = { ...quiz, _id: Date.now().toString() };
  Database.quizzes = [...Database.quizzes, newQuiz];
  return newQuiz;
}

// Retrieve all quizzes for a given course
export function findQuizzesForCourse(courseId) {
  const { quizzes } = Database;
  return quizzes.filter((quiz) => quiz.course === courseId);
}


// Update an existing quiz by its ID
export function updateQuiz(quizId, quizUpdates) {
  const { quizzes } = Database;
  const quiz = quizzes.find((quiz) => quiz._id === quizId);

  if (!quiz) {
    throw new Error(`Quiz with ID ${quizId} not found.`);
  }

  Object.assign(quiz, quizUpdates);
  return quiz;
}

// Delete a quiz by its ID
export function deleteQuiz(quizId) {
  const { quizzes } = Database;
  const quizIndex = quizzes.findIndex((q) => q._id === quizId);

  if (quizIndex !== -1) {
    // Remove the quiz from the database
    Database.quizzes.splice(quizIndex, 1);
    return true;
  } else {
    return false; // Quiz not found
  }
}


export const findQuizById = (courseId, quizId) => {
  const { quizzes } = Database;

  // Find the quiz by its ID and also make sure it belongs to the given course
  const quiz = quizzes.find((quiz) => quiz._id === quizId && quiz.course === courseId);

  if (!quiz) {
    throw new Error(`Quiz with ID ${quizId} not found in course ${courseId}`);
  }

  return quiz;
};




