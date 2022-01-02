// import { XYPlot, LineSeries, MarkSeries, LineMarkSeries } from 'react-vis'
import DashboardItem from './DashboardItem/DashboardItem'

export default function Dashboard() {
    const data = [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 1 },
        { x: 5, y: 7 },
        { x: 6, y: 6 },
        { x: 7, y: 3 },
        { x: 8, y: 2 },
        { x: 9, y: 0 },
    ]
    const series1 = [
        { x: 0, y: 2 },
        { x: 1, y: 6 },
    ]
    const series2 = [
        { x: 2, y: 7 },
        { x: 4, y: 6 },
        { x: 2, y: 1 },
        { x: 9, y: 0 },
        { x: 4, y: 2 },
        { x: 4, y: 9 },
    ]
    const series3 = [
        { x: 3, y: 2 },
        { x: 1, y: 5 },
        { x: 4, y: 23 },
        { x: 6, y: 8 },
        { x: 2, y: 3 },
        { x: 0, y: 5 },
    ]
    const myPalette = ['#c7e9c0', '#00441b']

    return (
        // <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', margin: '12em 6em' }}>
        //     <div>
        //         <XYPlot width={300} height={300}>
        //             <LineMarkSeries
        //                 className="linemark-series-example"
        //                 style={{
        //                     strokeWidth: '3px',
        //                 }}
        //                 lineStyle={{ stroke: 'red' }}
        //                 markStyle={{ stroke: 'blue' }}
        //                 data={data}
        //             />
        //             <LineMarkSeries className="linemark-series-example-2" curve={'curveMonotoneX'} data={data} />
        //         </XYPlot>
        //     </div>
        //     <div>
        //         <XYPlot height={200} width={200} colorType="category" colorDomain={[0, 1, 2]} colorRange={myPalette}>
        //             <LineSeries data={series1} color={0} />
        //             <LineSeries data={series2} color={1} />
        //             <LineSeries data={series3} color={2} />
        //         </XYPlot>
        //     </div>
        //     <div>
        //         <XYPlot height={200} width={200} colorType="category" colorDomain={[0, 1, 2]} colorRange={myPalette}>
        //             <MarkSeries data={series1} color={0} />
        //             <MarkSeries data={series2} color={1} />
        //             <MarkSeries data={series3} color={2} />
        //         </XYPlot>
        //     </div>
        // </div>
        <div>
            <DashboardItem />
        </div>
    )
}
