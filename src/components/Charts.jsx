import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from "chart.js";
  import { Bar, Pie } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
export function VerticalBarChart({ ChartData }) {
    const options = {
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          color: "white",
          font: {
            size: 14,
            family: 'poppins'
          },
        },
      },
    };
   
    const backgroundColors = ["#53D9D9", "#002B49", "#0067A0"];
    const data = {
      labels: ChartData.map((item) => item.service__nom),
      datasets: [
        {
          label: ChartData.map((item) => item.service__nom),
          data: ChartData.map((item) => item.total),
          backgroundColor: backgroundColors,
          borderWidth: 1,
        },
      ],
    };
  
    return <Bar data={data} options={options} />;
  }

export  function PieChart({ ChartData }) {
    const data = {
      labels: ChartData.map((item) => item.nom),
      datasets: [
        {
          labels: ChartData.map((item) => item.nom),
          data: ChartData.map((item) => item.points_fidelite),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderWidth: 1,
        },
      ],
    };
    return (
      <Pie data={data} />
    )
  }

export default VerticalBarChart;