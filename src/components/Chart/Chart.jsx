import BarChart from './BarChart/BarChart'
import classes from './Chart.module.css'
import DoughnutChart from './DoughnutChart/DoughnutChart'
import LineChart from './LineChart/LineChart'
import PieChart from './PieChart/PieChart'

export default function Chart() {
    return (
        <div className={classes.graphWrapper}>
            <div className={classes.graphBox}>
                <p>Doughnut Chart</p>
                <DoughnutChart />
            </div>
            <div className={classes.graphBox}>
                <p>Bar Chart</p>
                <BarChart />
            </div>
            <div className={classes.graphBox}>
                <p>Line Chart</p>
                <LineChart />
            </div>
            <div className={classes.graphBox}>
                <p>Pie Chart</p>
                <PieChart />
            </div>
        </div>
    )
}
