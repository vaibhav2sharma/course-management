import React from "react";
import "../styles/components.css";

const AssignmentCard = ({ assignment }) => {
  return (
    <div className="assignment-card">
      <h3>{assignment.title}</h3>
      <p>Due Date: {assignment.dueDate}</p>
      <p>Status: {assignment.status}</p>
    </div>
  );
};

export default AssignmentCard;
