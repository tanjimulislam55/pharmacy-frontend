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
                    <option value="">Monthly</option>
                    <option value="">Yearly</option>
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
            <div className={classes.graphBox}>
                <select className={classes.select}>
                    <option value="">Top Medicine - Monthly</option>
                    <option value="">Top Medicine - Yearly</option>
                </select>
                <DoughnutChart />
            </div>
            <div className={classes.graphBox}>
                <select className={classes.select}>
                    <option value="">Top Customer - Monthly</option>
                    <option value="">Top Customer - Yearly</option>
                </select>
                <PieChart />
            </div>
        </div>
    )
}
