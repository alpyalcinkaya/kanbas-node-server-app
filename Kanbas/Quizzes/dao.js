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

const findQuizQuestions = (quizId) => {
  const { questions } = Database;

  const questions_for_quiz = questions.find((question) => question.quizId === quizId)
  console.log(`questions for ${quizId} `, question)
  if (!quiz) {
    throw new Error(`Quiz question with quizID ${quizId} not found `);
  }
}


const generateUniqueId = () => {
  return Math.floor(Math.random() * 100000); // Generate a random unique ID
};

export const addQuestionToQuiz = async (quizId, questionData) => {
  try {
    // Find the quiz by its ID
    const quiz = db.quizzes.find((quiz) => quiz._id === quizId);
    
    if (!quiz) {
      throw new Error("Quiz not found");
    }

    // Generate a new unique ID for the question
    const newQuestionId = generateUniqueId();

    // Create the new question object
    const newQuestion = {
      _id: newQuestionId,
      quizId: quizId,
      ...questionData,
    };

    // Push the new question into the quiz's questions array
    if (!quiz.questions) {
      quiz.questions = [];
    }

    quiz.questions.push(newQuestion);

    // Save changes to the database
    Database.questions = [...Database.questions, newQuestion];

    return newQuestion;
  } catch (error) {
    console.error("Error adding question to quiz:", error);
    throw error;
  }
};




