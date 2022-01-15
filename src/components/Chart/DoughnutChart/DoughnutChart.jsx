import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import classes from './DougnutChart.module.css'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function DoughnutChart() {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                hoverOffset: 1,
            },
        ],
    }

    return (
        <div className={classes.container}>
            <Doughnut data={data} />
        </div>
    )
}
