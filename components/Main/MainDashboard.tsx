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

            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <div style={{
                        display: 'flex',
                        height: '100%',
                        gap: 10
                    }}>
                        <div>
                            <h2 className="card-title">AI Summary</h2>
                            <p>there alert 1 there alert 2</p>
                        </div>

                        <div className="divider divider-horizontal" />

                        <div>
                            <h2 className="card-title">Todo</h2>
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
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure
                        style={{
                            width: '100%',
                            height: 200
                        }}>
                        +
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}