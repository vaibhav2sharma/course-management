import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AssignmentPage = () => {
  const { id } = useParams();
  const [assignments] = useState([
    { id: 1, title: "React Components", dueDate: "2024-07-15" },
    { id: 2, title: "JS Promises", dueDate: "2024-07-20" },
  ]);

  return (
    <div className="page-container">
      <h1>Assignments for Course {id}</h1>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.id}>
            <strong>{assignment.title}</strong> - Due: {assignment.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentPage;
