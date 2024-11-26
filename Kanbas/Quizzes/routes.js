import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  // Create a quiz
  app.post("/api/courses/:courseId/quizzes", (req, res) => {
    const { courseId } = req.params;
    const quiz = {
      ...req.body,
      course: courseId,
    };
    const newQuiz = dao.createQuiz(quiz);
    res.send(newQuiz);
  });

  // Retrieve quizzes for a course
  app.get("/api/courses/:courseId/quizzes", (req, res) => {
    const { courseId } = req.params;
    const quizzes = dao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  });

  // Update a quiz
  app.put("/api/quizzes/:quizId", (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    try {
      const updatedQuiz = dao.updateQuiz(quizId, quizUpdates);
      res.send(updatedQuiz);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  });

  // Delete a quiz
  app.delete("/api/quizzes/:quizId", (req, res) => {
    const { quizId } = req.params;
    const status = dao.deleteQuiz(quizId);
    res.send({ success: status });
  });
}
