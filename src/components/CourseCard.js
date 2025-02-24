import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>
        <strong>Instructor:</strong> {course.instructor || "Unknown"}
      </p>
      <p>{course.description}</p>
      <Link to={`/courses/${course.id}`} className="view-btn">
        View Course
      </Link>
    </div>
  );
};

export default CourseCard;
