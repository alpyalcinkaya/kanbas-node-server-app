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



const app = express();
app.use(
  cors({
    credentials: true,
    origin: [
      process.env.NETLIFY_URL || "http://localhost:3000",
      "https://a5--superb-cupcake-d547e1.netlify.app",
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
  secret: 'sessionSecret', // Replace with a strong secret key
  resave: false,
  httpOnly: true,
  saveUninitialized: true,

  cookie: {
    domain: 'localhost',
    path: '/',
    maxAge: 5000 * 60, //5 mnt
    sameSite: 'lax' // Please use your own value based on requirements.
  }
}
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

app.listen(process.env.PORT || 4000);
