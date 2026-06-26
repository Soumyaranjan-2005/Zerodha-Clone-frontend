import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

export function DoughnutChart({ data }) {
  return (
    <div style={{ height: "250px", position: "relative", width: "100%" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
