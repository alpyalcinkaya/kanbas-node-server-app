import Database from "../Database/index.js";

// Enroll a user in a course
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now().toString(), user: userId, course: courseId });
}

// Unenroll a user from a course
export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );
  return true;
}

// Get all enrollments
export function findEnrollments() {
  return Database.enrollments;
}

// Find courses for a specific enrolled user
export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id)
  );
  return enrolledCourses;
}
