import DashboardCard from "./DashboardCard";

export default function MainDashboard() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 40
            }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 0,
                    paddingTop: 50
                }}>
                <a className="link link-hover"
                    style={{
                        color: 'gray'
                    }}>
                    don't know where to start?
                </a>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="grow" placeholder="Search" />
                    <kbd className="kbd kbd-sm">⌘</kbd>
                    <kbd className="kbd kbd-sm">K</kbd>
                </label>
            </div>

            <div className="card bg-base-100 w-200 shadow-sm">
                <div className="card-body">
                    <div style={{
                        display: 'flex',
                        height: '100%',
                        gap: 10
                    }}>
                        <div>
                            <h2 className="card-title">AI Summary</h2>
                            <div className="p-4 max-w-md">
                                <p className="font-medium mb-2">What happened when you went offline:</p>
                                <ul className="list-disc pl-5 space-y-1 marker:text-gray-500">
                                    <li>Alerts: there alert 1, there alert 2</li>
                                    <li>n warnings during 12-3-4 18:00:00 and 13-3-4 06:00:00</li>
                                    <li>Threshold auto action triggered n times</li>
                                    <li className="text-green-600">Currently: All resources Stable</li>
                                </ul>
                            </div>
                        </div>

                        <div className="divider divider-horizontal" />

                        <div>
                            <h2 className="card-title">Todo</h2>
                            <ul>
                                <li>Step 1:Collect History Analytics</li>
                                <li>Step 2:Summarize Analytics</li>
                                <li>Step 3:Make Report</li>
                            </ul>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Confirm</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 20,
                    justifyContent: 'center'
                }}>
                <DashboardCard url="/ChartsIcon/LineChart.png" name="Analytics 1" href="/analytics/1" />
                <DashboardCard url="/ResourcesIcon/WaterTank.png" name="Resources 1" href="/resource/1" />

                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure
                        style={{
                            width: '100%',
                            height: 200
                        }}>
                        +
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Add Dashboard</h2>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}