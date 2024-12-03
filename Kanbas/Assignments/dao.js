// assignments/dao.js
import model from "./model.js";

export const createAssignment = async (assignment) => {
  return await model.create(assignment);
};

export const findAssignmentsForCourse = async (courseId) => {
  return await model.find({ course: courseId });
};

export const updateAssignment = async (assignmentId, assignmentUpdates) => {
  return await model.findByIdAndUpdate(
    assignmentId, 
    assignmentUpdates,
    { new: true }
  );
};

export const deleteAssignment = async (assignmentId) => {
  return await model.findByIdAndDelete(assignmentId);
};