import { RiEditLine } from "@remixicon/react";
import UnitInfo from "./UnitInfo";

export default function ResourceMain() {
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column'
            }}>
            <div
                style={{
                    display: 'flex'
                }}>
                Resource <RiEditLine />
            </div>

            <div>
                <div>
                    Units
                </div>
                <div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title font-semibold">Unit 1</div>
                        <div className="collapse-content text-sm">
                            <UnitInfo/>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title font-semibold">Unit 2</div>
                        <div className="collapse-content text-sm">
                            <UnitInfo/>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title font-semibold">Unit 3</div>
                        <div className="collapse-content text-sm">
                            <UnitInfo/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}