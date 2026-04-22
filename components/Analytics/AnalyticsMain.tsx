import { RiEditLine } from "@remixicon/react";
import MyLineChart from "../Charts/LineChart";

export default function AnalyticsMain() {

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                padding: 50,
                gap: 15
            }}>
            <div
                style={{
                    display: 'flex',
                    fontSize: 40,
                    gap: 10,
                    alignItems: 'center'
                }}>
                Name <RiEditLine size={40} />
            </div>
            <MyLineChart />
            <div
                style={{
                    fontSize: 24
                }}>
                Chart Settings
            </div>
            <div>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <label className="input">
                        <span className="label">value</span>
                        <input type="text" placeholder="0" />
                    </label>

                    <label className="input">
                        <span className="label">threshold</span>
                        <input type="text" placeholder="0" />
                    </label>
                </div>
                <div>
                    Associated Resources
                </div>
                <div
                    style={{
                        display: 'flex',
                        gap: 20
                    }}>
                    <button className="btn"
                        style={{
                            width: 100
                        }}>
                        Default
                    </button>
                    <button className="btn"
                        style={{
                            width: 100
                        }}>
                        Default
                    </button>
                    <button className="btn"
                        style={{
                            width: 100
                        }}>
                        +
                    </button>
                </div>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">
                        Note
                    </legend>
                    <textarea className="textarea h-24" placeholder="Bio" />
                </fieldset>
            </div>
        </div>
    )
}