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
                <LineChart
                    labelValue={{ label: 'Daily Sales' }}
                    labelsValue={{
                        labels: [
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
                        ],
                    }}
                    dataValue={{
                        data: [
                            50, 100, 120, 200, 400, 300, 500, 700, 1200, 1000, 950, 700, 950, 1500, 1250, 1100, 800,
                            900, 1100, 450, 100,
                        ],
                    }}
                />
            </div>
            <div className={classes.graphBox}>
                <select className={classes.select}>
                    <option value="">Weekly</option>
                    <option value="">Monthly</option>
                </select>
                <LineChart
                    labelValue={{ label: 'Weekly Sales' }}
                    labelsValue={{
                        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    }}
                    dataValue={{
                        data: [5000, 4500, 3500, 5000, 7000, 4000, 6000, 7500, 2000],
                    }}
                />
            </div>
        </div>
    )
}
