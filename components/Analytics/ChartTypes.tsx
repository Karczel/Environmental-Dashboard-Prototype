import MediaBlock from "../MediaBlock";

export default function ChartTypes() {
    return (
        <div
            style={{
                display: 'flex',
                gap: 10,
                flexWrap: 'wrap'
            }}>
            <div
                style={{
                    height: 100,
                    width: 100
                }}>
                <MediaBlock url="/ChartsIcon/BarChart.png" objectFit="cover" />
            </div>
            <div
                style={{
                    height: 100,
                    width: 100
                }}>
                <MediaBlock url="/ChartsIcon/LineChart.png" objectFit="cover" />
            </div>
            <div
                style={{
                    height: 100,
                    width: 100
                }}>
                <MediaBlock url="/ChartsIcon/PieChart.png" objectFit="cover" />
            </div>
            <div
                style={{
                    height: 100,
                    width: 100
                }}>
                <MediaBlock url="/ChartsIcon/ScatterChart.png" objectFit="cover" />
            </div>
        </div>
    )
}