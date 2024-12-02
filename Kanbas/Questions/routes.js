// questionsRoutes.js
import * as questionsDao from "./dao.js";

export default function QuestionsRoutes(app) {
  // Create a new question
  app.post("/api/questions", (req, res) => {
    const question = req.body;
    try {
      const newQuestion = questionsDao.createQuestion(question);
      res.status(201).json(newQuestion);
    } catch (error) {
      console.error("Error creating question:", error.message);
      res.status(500).send({ error: error.message });
    }
  });

  // Get a question by ID
  app.get("/api/questions/:questionId", (req, res) => {
    const { questionId } = req.params;
    try {
      const question = questionsDao.findQuestionById(questionId);
      res.json(question);
    } catch (error) {
      console.error("Error fetching question:", error.message);
      res.status(404).send({ error: error.message });
    }
  });

  // Update a question
  app.put("/api/questions/:questionId", (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    try {
      const updatedQuestion = questionsDao.updateQuestion(questionId, questionUpdates);
      res.json(updatedQuestion);
    } catch (error) {
      console.error("Error updating question:", error.message);
      res.status(404).send({ error: error.message });
    }
  });

  // Delete a question
  app.delete("/api/questions/:questionId", (req, res) => {
    const { questionId } = req.params;
    try {
      const status = questionsDao.deleteQuestion(questionId);
      res.send({ success: status });
    } catch (error) {
      console.error("Error deleting question:", error.message);
      res.status(404).send({ error: error.message });
    }
  });
}
