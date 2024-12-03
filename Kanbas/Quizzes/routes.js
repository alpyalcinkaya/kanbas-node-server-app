import quizzes from "../Database/quizzes.js";
import * as quizzesDao from "./dao.js";
import * as questionsDao from "../Questions/dao.js"

export default function QuizRoutes(app) {
  // Create a quiz
  app.post("/api/courses/:courseId/quizzes", (req, res) => {
    const { courseId } = req.params;
    const quiz = {
      ...req.body,
      course: courseId,
      questionIds: [],
    };
    const newQuiz = quizzesDao.createQuiz(quiz);
    res.send(newQuiz);
  });

  // Retrieve quizzes for a course
  app.get("/api/courses/:courseId/quizzes", (req, res) => {
    const { courseId } = req.params;
    const quizzes = quizzesDao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  });

  // Fetch a quiz by Id to edit it
  app.get("/api/courses/:courseId/quizzes/:quizId/edit", (req, res) => {
    const { courseId, quizId } = req.params;
    try {
      const quiz = quizzesDao.findQuizById(courseId, quizId);
      res.json(quiz);
    } catch (error) {
      console.error("Server - Quiz not found:", error.message);
      res.status(404).send({ error: error.message });
    }
  });

  // Fetch a quiz to preview it
  app.get("/api/courses/:courseId/quizzes/:quizId/preview", (req, res) => {
    const { courseId, quizId } = req.params;
    try {
      const quiz = quizzesDao.findQuizById(courseId, quizId);
      res.json(quiz);
    } catch (error) {
      console.error("Server - Quiz not found:", error.message);
      res.status(404).send({ error: error.message });
    }
  });

  // Update a quiz
  app.put("/api/quizzes/:quizId", (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    try {
      const updatedQuiz = quizzesDao.updateQuiz(quizId, quizUpdates);
      res.send(updatedQuiz);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  });

  // Delete a quiz
  app.delete("/api/quizzes/:quizId", (req, res) => {
    const { quizId } = req.params;
    const status = quizzesDao.deleteQuiz(quizId);
    res.send({ success: status });
  });


  app.post("/api/quizzes/:quizId/questions", (req, res) => {
    const { quizId } = req.params;
    const questionData = req.body;

    try {
      // Create the question
      const newQuestion = questionsDao.createQuestion(questionData);

      // Associate the question with the quiz
      //  const updatedQuiz = quizzesDao.addQuestionToQuiz(quizId, newQuestion._id);

      res.status(201).json(newQuestion);
    } catch (error) {
      console.error("Error adding question to quiz:", error.message);
      res.status(500).send({ error: error.message });
    }
  });


// app.get('/api/quizzes/:quizId/questions', (req, res) => {
//   try {
//     const { quizId } = req.params;
//     const questions = findQuestionsByQuizId(quizId);
//     console.log("route for quizzes hit");
//     if (questions.length === 0) {
//       return res.status(404).json({ message: 'No questions found for this quiz' });
//     }
//     res.json(questions);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

}