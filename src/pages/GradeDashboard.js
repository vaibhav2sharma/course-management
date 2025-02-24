import React, { useState } from "react";
// import "../styles/pages.css";

const GradeDashboard = () => {
  const [grades, setGrades] = useState([
    { course: "React Basics", grade: "A" },
    { course: "Advanced JavaScript", grade: "B+" },
  ]);

  return (
    <div className="page-container">
      <h1>Grade Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((entry, index) => (
            <tr key={index}>
              <td>{entry.course}</td>
              <td>{entry.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeDashboard;
