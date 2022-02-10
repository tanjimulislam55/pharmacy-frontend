import BarChart from './BarChart/BarChart'
import classes from './Chart.module.css'
import DoughnutChart from './DoughnutChart/DoughnutChart'
import LineChart from './LineChart/LineChart'
import PieChart from './PieChart/PieChart'

export default function Chart() {
    return (
        <div className={classes.graphWrapper}>
            <div className={classes.graphBox}>
                <select className={classes.select}>
                    <option value="">Daily</option>
                    <option value="">Monthly</option>
                </select>
                <LineChart />
            </div>
            <div className={classes.graphBox}>
                <select className={classes.select}>
                    <option value="">Weekly</option>
                    <option value="">Monthly</option>
                </select>
                <BarChart />
            </div>
        </div>
    )
}
