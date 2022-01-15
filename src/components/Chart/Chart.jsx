import BarChart from './BarChart/BarChart'
import classes from './Chart.module.css'
import DoughnutChart from './DoughnutChart/DoughnutChart'
import LineChart from './LineChart/LineChart'
import PieChart from './PieChart/PieChart'

export default function Chart() {
    return (
        <div className={classes.graphWrapper}>
            <div className={classes.graphBox}>
                <DoughnutChart />
            </div>
            <div className={classes.graphBox}>
                <BarChart />
            </div>
            <div className={classes.graphBox}>
                <LineChart />
            </div>
            <div className={classes.graphBox}>
                <PieChart />
            </div>
        </div>
    )
}
