import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const GradeChart = ({ grades }) => {
  const data = {
    labels: grades.map((g) => g.assignment),
    datasets: [
      {
        label: "Grades",
        data: grades.map((g) => g.score),
        backgroundColor: "blue",
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Grade Performance</h2>
      <Bar data={data} />
    </div>
  );
};

export default GradeChart;
