import { RiEditLine } from "@remixicon/react";
import UnitInfo from "./UnitInfo";
import ResourceCircles from "./WaterTankChart";

export default function ResourceMain() {
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                padding: 25,
                paddingLeft: 50,
                gap: 15
            }}>
            <div
                style={{
                    display: 'flex',
                    fontSize: 40,
                    gap: 10,
                    alignItems: 'center'
                }}>
                Resource <RiEditLine size={40} />
            </div>
            <ResourceCircles />
            <div
                style={{
                    fontSize: 24
                }}>
                Units
            </div>
            <div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title font-semibold">Unit 1</div>
                    <div className="collapse-content text-sm">
                        <UnitInfo />
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title font-semibold">Unit 2</div>
                    <div className="collapse-content text-sm">
                        <UnitInfo />
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title font-semibold">Unit 3</div>
                    <div className="collapse-content text-sm">
                        <UnitInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}