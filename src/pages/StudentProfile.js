import React from "react";
import { useParams } from "react-router-dom";
// import "../styles/pages.css";

const StudentProfile = () => {
  const { id } = useParams();

  const students = {
    1: {
      name: "Alice Johnson",
      email: "alice@example.com",
      enrolledCourses: ["React Basics"],
    },
    2: {
      name: "Bob Smith",
      email: "bob@example.com",
      enrolledCourses: ["Advanced JavaScript"],
    },
  };

  const student = students[id] || {
    name: "Unknown",
    email: "Not available",
    enrolledCourses: [],
  };

  return (
    <div className="page-container">
      <h1>Student Profile</h1>
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Email:</strong> {student.email}
      </p>
      <p>
        <strong>Enrolled Courses:</strong>{" "}
        {student.enrolledCourses.join(", ") || "None"}
      </p>
    </div>
  );
};

export default StudentProfile;
