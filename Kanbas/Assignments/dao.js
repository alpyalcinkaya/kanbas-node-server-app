import Database from "../Database/index.js";

// Create an assignment and add it to the database
export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() }; // Generate a unique ID
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

// Retrieve all assignments for a given course
export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}

// Update an existing assignment by its ID
export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database;
  const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  
  if (!assignment) {
    throw new Error(`Assignment with ID ${assignmentId} not found.`);
  }

  Object.assign(assignment, assignmentUpdates);
  return assignment;
}


// Delete an assignment by its ID

export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  const assignmentIndex = assignments.findIndex((a) => a._id === assignmentId);

  if (assignmentIndex !== -1) {
    // Remove the assignment from the database
    Database.assignments.splice(assignmentIndex, 1);
    return true;
  } else {
    return false; // Assignment not found
  }
}
