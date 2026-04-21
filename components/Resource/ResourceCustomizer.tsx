import CustomizeResourceAttr from "./CustomizeResourceAttr";
import ResourceVisualization from "./ResourceVisualization";

export default function ResourceCustomizer() {
    return (
        <div
            style={{
                width: '40%',
                minWidth: 200
            }}>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title font-semibold">On Hover Data</div>
                <div className="collapse-content text-sm">
                    <CustomizeResourceAttr />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title font-semibold">Visualization</div>
                <div className="collapse-content text-sm">
                    <div>
                        <ResourceVisualization />
                    </div>
                </div>
            </div>
        </div>
    )
}