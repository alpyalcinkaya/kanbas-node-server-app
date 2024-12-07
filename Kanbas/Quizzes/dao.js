import Database from "../Database/index.js";


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
    const quiz = Database.quizzes.find((quiz) => quiz._id === quizId);
    
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

// Save a quiz score
export const saveQuizScore = (studentId, quizId, score) => {
  // Check if score already exists
  const existingScoreIndex = Database.quizScores.findIndex(
    score => score.studentId === studentId && score.quizId === quizId
  );

  const scoreData = {
    studentId,
    quizId,
    score,
    timestamp: new Date().toISOString()
  };

  if (existingScoreIndex !== -1) {
    // Update existing score
    Database.quizScores[existingScoreIndex] = scoreData;
  } else {
    // Add new score
    Database.quizScores.push(scoreData);
  }

  return scoreData;
};


export const findQuizScoresForStudent = (studentId) => {
  const scores = Database.quizScores.filter(
    score => score.studentId === studentId
  );
  
  // Convert array to object with quizId as key
  return scores.reduce((acc, score) => {
    acc[score.quizId] = score.score;
    return acc;
  }, {});
};

// export const addQuestionToQuiz = (quizId, questionId) => {
//     const quiz = Database.quizzes.find((q) => q._id === quizId);
//     if (!quiz) {
//       throw new Error(`Quiz with ID ${quizId} not found.`);
//     }
  
//     // Initialize questionIds array if not present
//     if (!quiz.questionIds) {
//       quiz.questionIds = [];
//     }
  
//     quiz.questionIds.push(questionId);
//     return quiz;
//   };
  
