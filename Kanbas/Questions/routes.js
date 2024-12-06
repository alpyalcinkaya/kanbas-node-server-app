// questionsRoutes.js
import * as questionsDao from "./dao.js";

export default function QuestionsRoutes(app) {
  // Create a new question
  app.post("/api/questions", (req, res) => {
    const question = req.body;
    try {
      const newQuestion = questionsDao.stion(question);
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

//    // Get questions by quiz ID
// app.get("/api/quizzes/:quizId/questions", (req, res) => {
//     const { quizId } = req.params;
//     try {
//       console.log("Getting questions for Quiz ID:", quizId);
//       const questions = questionsDao.findQuestionsByQuizId(quizId);
//       console.log("Found questions:", questions);
//       res.json(questions);
//     } catch (error) {
//       console.error("Error fetching questions:", error.message);
//       res.status(404).send({ error: error.message });
//     }
//   });

  // Update a question
  app.put("/api/questions/:questionId/update", (req, res) => {
    console.log("Route accessed:", req.params.questionId); // Debugging log
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
//   app.delete("/api/questions/:questionId", (req, res) => {
//     const { questionId } = req.params;
//     try {
//       const status = questionsDao.deleteQuestion(questionId);
//       res.send({ success: status });
//     } catch (error) {
//       console.error("Error deleting question:", error.message);
//       res.status(404).send({ error: error.message });
//     }
//   });


  app.get("/api/quizzes/:quizId/questions", (req, res) => {
    const { quizId } = req.params;
    try {
      console.log("Getting questions for Quiz ID:", quizId);
      console.log(quizId);
      const questions = questionsDao.findQuestionsByQuizId(quizId);
      console.log("Found questions:", questions);
      res.json(questions);
    } catch (error) {
      console.error("Error fetching questions 2 :", error.message);
      res.status(404).send({ error: error.message });
    }
  });

// questionsRoutes.js
app.delete("/api/questions/:questionId", (req, res) => {
    const { questionId } = req.params;
    try {
      console.log(`Received request to delete question with ID: ${questionId}`);
      
      const status = questionsDao.deleteQuestion(questionId);
      
      if (status) {
        console.log(`Successfully deleted question with ID: ${questionId}`);
        res.send({ success: true });
      } else {
        console.error(`Failed to delete question with ID: ${questionId}`);
        res.status(404).send({ error: `Question with ID ${questionId} not found.` });
      }
    } catch (error) {
      console.error("Error deleting question:", error.message);
      res.status(404).send({ error: error.message });
    }
  });
  


}