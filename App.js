// const express = require("express"); -> old way (commonjs)
import express from "express";
import "dotenv/config";
import HelloRoutes from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js"
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js";
import QuizRoutes from "./Kanbas/Quizzes/routes.js";
import QuestionsRoutes from "./Kanbas/Questions/routes.js"

const app = express();

// First, set up session
const sessionOptions = {
  secret: process.env.SESSION_SECRET || 'sessionSecret',
  resave: false,
  saveUninitialized: false,
  proxy: true,  
  cookie: {
    secure: true,
    sameSite: 'none',
    httpOnly: true  
  }
};

app.use(session(sessionOptions));

app.use(
  cors({
    credentials: true,
    origin: [
      process.env.NETLIFY_URL || "http://localhost:3000",
      "https://group-project-react--superb-cupcake-d547e1.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"]  // Add this to explicitly allow methods
  })
);

// Session middleware must come before CORS
app.use(session(sessionOptions));

// Then CORS
app.use(
  cors({
    credentials: true,
    origin: [
      process.env.NETLIFY_URL || "http://localhost:3000",
      "https://group-project-react--superb-cupcake-d547e1.netlify.app",
      "https://kanbas-node-server-app-group-project.onrender.com"
    ],
  })
);

app.use(express.json());

// Debug middleware with error handling
app.use((req, res, next) => {
  try {
    console.log("Session ID:", req.sessionID);
    console.log("Session:", req.session);
    console.log("User in Session:", req.session?.currentUser || 'No user');
    next();
  } catch (error) {
    console.error("Session middleware error:", error);
    next();
  }
});

// Routes
HelloRoutes(app);
CourseRoutes(app);
Lab5(app);
UserRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
QuizRoutes(app);
QuestionsRoutes(app);

app.listen(process.env.PORT || 4000);