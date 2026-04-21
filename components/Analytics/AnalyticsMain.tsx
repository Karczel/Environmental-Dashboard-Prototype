import { RiEditLine } from "@remixicon/react";
import LegendEffectOpacity from "../Charts/HistoryChart";

export default function AnalyticsMain() {
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
                Name
                <RiEditLine />
            </div>
<LegendEffectOpacity/>
            <div
                style={{
                    fontSize: '20px'
                }}>
                Chart Settings
            </div>
            <div>
                <div>
                    <label className="input">
                        <span className="label">value</span>
                        <input type="text" placeholder="URL" />
                    </label>
                    <label className="input">
                        <span className="label">threshold</span>
                        <input type="text" placeholder="URL" />
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
                        <textarea className="textarea h-24" placeholder="Bio"/>
                    </fieldset>
            </div>
        </div>
    )
}