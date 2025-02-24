import React from "react";
import { useParams } from "react-router-dom";
import { useCourses } from "../hooks/useCourses";

const CourseDetails = () => {
  const { courses } = useCourses();
  const { courseId } = useParams();

  // Find the course by ID
  const course = courses.find((c) => c.id === courseId) || {
    id: "dummy",
    title: "Demo Course",
    instructor: "Admin",
    image: "https://via.placeholder.com/300",
    description: "This is a placeholder course since no course was found.",
  };

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <p>
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <img src={course.image} alt={course.title} />
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetails;
