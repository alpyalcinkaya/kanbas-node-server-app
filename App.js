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
// Update CORS configuration
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

// const sessionOptions = {
//   secret: process.env.SESSION_SECRET || "kanbas",
//   resave: false,
//   saveUninitialized: false,
// };
// if (process.env.NODE_ENV !== "development") {
//   sessionOptions.proxy = true;
//   sessionOptions.cookie = {
//     sameSite: "none",
//     secure: true,
//     domain: process.env.NODE_SERVER_DOMAIN,
//   };
// }

const sessionOptions = {
  secret: process.env.SESSION_SECRET || 'sessionSecret',
  resave: false,
  saveUninitialized: false,
  proxy: false,
  cookie: {
    secure: false,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  }
};

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

// Add this debugging middleware
app.use((req, res, next) => {
  console.log("Session ID:", req.sessionID);
  console.log("User in Session:", req.session.currentUser);
  next();
});

app.use(session(sessionOptions));

app.use(express.json());

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