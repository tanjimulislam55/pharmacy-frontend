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

const LineChart = ({ labelValue, labelsValue, dataValue }) => {
    const data = {
        labels: labelsValue.labels,
        datasets: [
            {
                label: labelValue.label,
                data: dataValue.data,
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
