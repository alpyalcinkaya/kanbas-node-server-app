// assignments/routes.js
import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const newAssignment = {
      ...req.body,
      course: courseId,
    };
    try {
      const createdAssignment = await assignmentsDao.createAssignment(newAssignment);
      res.status(201).json(createdAssignment);
    } catch (error) {
      res.status(500).json({ error: "Failed to create assignment" });
    }
  });

  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    try {
      const updatedAssignment = await assignmentsDao.updateAssignment(
        assignmentId, 
        req.body
      );
      if (!updatedAssignment) {
        res.status(404).send("Assignment not found");
        return;
      }
      res.json(updatedAssignment);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    try {
      const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
      res.json(assignments);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    try {
      const status = await assignmentsDao.deleteAssignment(assignmentId);
      if (!status) {
        res.status(404).send(`Assignment with ID ${assignmentId} not found.`);
        return;
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
}