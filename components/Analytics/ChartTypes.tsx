import { chartTypes } from "@/public/mockup_data/chartTypes";
import MediaBlock from "../MediaBlock";

interface ChartTypesProps {
    setChartTypeId: (id: number) => void;
}

export default function ChartTypes({ setChartTypeId }: ChartTypesProps) {
    const onSelectChartType = (chartType_id: number) => {
        setChartTypeId(chartType_id)
    }

    return (
        <div
            style={{
                display: 'flex',
                gap: 10,
                flexWrap: 'wrap'
            }}>
                {chartTypes.map((chartType, index) => (
                    // Wrap in arrow function so it's called on click, not on render
                    <button onClick={() => onSelectChartType(chartType.id)}
                style={{
                    height: 100,
                    width: 100
                }} key={index}>
                <MediaBlock url={`/ChartsIcon/${chartType.iconURL}`} objectFit="cover" />
            </button>
                ))}
        </div>
    )
}