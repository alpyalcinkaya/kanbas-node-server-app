// routes.js
import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {

   // Create a new assignment for a course
   app.post("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params; // Get the course ID from URL parameters
    const newAssignment = {
      ...req.body,
      course: courseId,
    };
    try {
      const createdAssignment = assignmentsDao.createAssignment(newAssignment);
      res.status(201).json(createdAssignment); // Respond with the newly created assignment
    } catch (error) {
      res.status(500).json({ error: "Failed to create assignment" });
    }
  });


  // Update an existing assignment
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    try {
      const updatedAssignment = assignmentsDao.updateAssignment(assignmentId, req.body);
      res.send(updatedAssignment);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

  // Get all assignments for a course
  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
    res.send(assignments);
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = assignmentsDao.deleteAssignment(assignmentId);
    if (status) {
      res.sendStatus(204); // No Content, deletion was successful
    } else {
      res.status(404).send(`Assignment with ID ${assignmentId} not found.`);
    }
  });
}
