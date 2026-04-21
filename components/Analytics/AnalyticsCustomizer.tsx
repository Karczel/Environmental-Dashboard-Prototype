import ChartTypes from "./ChartTypes";
import CustomizeChartAttr from "./CustomizeChartAttr";

export default function AnalyticsCustomizer() {
    return (
        <div
            style={{
                width: '40%',
                minWidth: 200
            }}>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title font-semibold">Customize</div>
                <div className="collapse-content text-sm">
                    <CustomizeChartAttr />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title font-semibold">Chart Types</div>
                <div className="collapse-content text-sm">
                    <ChartTypes />
                </div>
            </div>
        </div>
    )
}