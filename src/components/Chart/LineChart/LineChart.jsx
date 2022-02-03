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
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Monthly Sales',
                data: [6500, 5900, 8000, 8100, 5600, 5500, 4000, 5000, 6000, 7000, 8500, 9200, 3000],
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
