import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import classes from './PieChart.module.css'

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = () => {
    const labels = ['Sajid', 'Rishad', 'Antor', 'Others']
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Top Customer',
                data: [45, 20, 25, 10],
                backgroundColor: ['#41add9', '#2cbdb3', '#5cb484', '#325fb1'],
                hoverOffset: 1,
            },
        ],
    }

    return (
        <div className={classes.container}>
            <Pie data={data} />
        </div>
    )
}

export default PieChart
