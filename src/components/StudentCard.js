import React from "react";
import "../styles/components.css";

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Courses Enrolled: {student.courses.length}</p>
    </div>
  );
};

export default StudentCard;
