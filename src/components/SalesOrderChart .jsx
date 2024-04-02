import React from "react";
import { Bar } from "react-chartjs-2";

function SalesOrderChart({ chartData }) {
  const options = {
    scales: {
      x: {
        type: 'category', // This defines the x-axis as a category scale
        labels: chartData.labels // Use the labels from chartData for x-axis
      },
      y: {
        beginAtZero: true // Start y-axis at zero
      }
    }
  };

  return <Bar data={chartData} options={options} />;
}

export default SalesOrderChart;
