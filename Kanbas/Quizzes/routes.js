import quizzes from "../Database/quizzes.js";
import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  // Create a quiz
  app.post("/api/courses/:courseId/quizzes/new/edit", (req, res) => {
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

// Route for fetching a quiz by Id to edit it. 
app.get("/api/courses/:courseId/quizzes/:quizId/edit", (req, res) => {
  const { courseId, quizId } = req.params;
 // console.log("Server - Fetch Quiz by ID Request: Edit", courseId, quizId);
  
  try {
    const quiz = dao.findQuizById(courseId, quizId);
    res.json(quiz);
  } catch (error) {
    console.error("Server - Quiz not found:", error.message);
    res.status(404).send({ error: error.message });
  }
});

// Route for fetching a quiz by Id to edit it. 
app.get("/api/courses/:courseId/quizzes/:quizId/editor", (req, res) => {
  const { courseId, quizId } = req.params;
 // console.log("Server - Fetch Quiz by ID Request: Edit", courseId, quizId);
  
  try {
    const quiz = dao.findQuizById(courseId, quizId);
    res.json(quiz);
  } catch (error) {
    console.error("Server - Quiz not found:", error.message);
    res.status(404).send({ error: error.message });
  }
});


// Route for getting a quiz to preview it
app.get("/api/courses/:courseId/quizzes/:quizId/preview", (req, res) => {
  const { courseId, quizId } = req.params;
 // console.log("Server - Fetch Quiz by ID Request: Preview ", courseId, quizId);
  
  try {
    const quiz = dao.findQuizById(courseId, quizId);
    res.json(quiz);
  } catch (error) {
    console.error("Server - Quiz not found:", error.message);
    res.status(404).send({ error: error.message });
  }
});


app.post('/api/quizzes/:quizId/questions', async (req, res) => {
  const { quizId } = req.params;
  const questionData = req.body;

  try {
    // Generate a unique ID for the question, and save it to the database
    const newQuestion = await dao.addQuestionToQuiz(quizId, questionData);
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error('Error adding question:', error);
    res.status(500).send('Server error');
  }
});
  
  
}
