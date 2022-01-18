import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import classes from './DougnutChart.module.css'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function DoughnutChart() {
    const labels = ['Napa Extra', 'Ace Plus', 'Antazol', 'Others']
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Top Medicine',
                data: [45, 25, 20, 10],
                backgroundColor: ['#41add9', '#3ecbcf', '#2cbdb3', '#5cb484', '#7eb88b'],
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
