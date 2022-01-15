import { Chart as ChartJS, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";
import classes from "./BarChart.module.css";

ChartJS.register(BarElement);

const BarChart = () => {
    const data = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                ],
                hoverOffset: 1,
            },
        ],
    };

    return (
        <div className={classes.container}>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;
