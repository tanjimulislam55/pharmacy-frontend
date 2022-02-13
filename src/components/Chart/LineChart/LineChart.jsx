import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import classes from './LineChart.module.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const LineChart = () => {
    const labels = [
        '6 AM',
        '7 AM',
        '8 AM',
        '9 AM',
        '10 AM',
        '11 AM',
        '12 PM',
        '1 PM',
        '2 PM',
        '3 PM',
        '4 PM',
        '5 PM',
        '6 PM',
        '7 PM',
        '8 PM',
        '9 PM',
        '10 PM',
        '11 PM',
        '12 AM',
        '1 AM',
        '2 AM',
    ]
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Daily Sales',
                data: [
                    50, 100, 120, 200, 400, 300, 500, 700, 1200, 1000, 950, 700, 950, 1500, 1250, 1100, 800, 900, 1100,
                    450, 100,
                ],
                backgroundColor: 'rgb(75, 192, 192)',
                hoverOffset: 1,
            },
        ],
    }

    return (
        <div className={classes.container}>
            <Line data={data} />
        </div>
    )
}

export default LineChart
