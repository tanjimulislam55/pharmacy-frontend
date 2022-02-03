import { Chart as ChartJS, BarElement } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import classes from './BarChart.module.css'

ChartJS.register(BarElement)

const BarChart = () => {
    const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Weekly Sales',
                data: [300, 450, 350, 500, 700, 400, 600, 800],
                backgroundColor: ['#457dc3', '#41add9', '#3ecbcf', '#2cbdb3', '#5cb484', '#7eb88b'],
                hoverOffset: 1,
            },
        ],
    }

    return (
        <div className={classes.container}>
            <Bar data={data} />
        </div>
    )
}

export default BarChart
