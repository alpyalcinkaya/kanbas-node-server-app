import * as enrollmentsDao from "./dao.js";
import * as coursesDao from "../Courses/dao.js";
import Database from "../Database/index.js";

export default function EnrollmentRoutes(app) {
  // Enroll user in a course
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.status(201).json({ userId, courseId });
  });

  // Unenroll user from a course
  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    enrollmentsDao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(204);
  });

  // Get all enrollments
  app.get("/api/enrollments", (req, res) => {
    const enrollments = enrollmentsDao.findEnrollments();
    res.json(enrollments);
  });

  // Get courses enrolled by or managed by a user
  app.get("/api/enrollments/:userId/courses", (req, res) => {
    const { userId } = req.params;
    const user = Database.users.find((u) => u._id === userId);
    
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
  
    try {
      if (user.role === "STUDENT") {
        const enrolledCourses = coursesDao.findCoursesForEnrolledUser(userId);
        res.json(enrolledCourses);
      } else if (user.role === "FACULTY") {
        const managedCourses = coursesDao.findCoursesByInstructor(userId);
        res.json(managedCourses);
      } else {
        res.status(400).send("Invalid user role");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Error fetching courses" });
    }
  });

    // Fetch courses managed by a specific user
    app.get("/api/courses/managed/:userId", (req, res) => {
        const { userId } = req.params;
        const managedCourses = coursesDao.findCoursesManagedByUser(userId);
        res.json(managedCourses);
      });
    
}
