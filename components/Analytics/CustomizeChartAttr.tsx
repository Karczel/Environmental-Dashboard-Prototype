export default function CustomizeChartAttr() {
    return (
        <div>
            <label className="input">
                <span className="label">color</span>
                <input type="text" placeholder="#000000" />
            </label>
            <label className="input">
                <span className="label">attr</span>
                <input type="text" placeholder="value" />
            </label>
        </div>
    )
}