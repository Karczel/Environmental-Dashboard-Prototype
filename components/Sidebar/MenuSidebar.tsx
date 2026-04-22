import { RiDashboardFill, RiHome2Fill, RiMenuLine, RiPushpinLine, RiQuestionLine, RiSettings3Fill, RiUnpinFill } from "@remixicon/react";
import Link from "next/link";
import Header from "@/components/Header";
import { ReactNode } from "react";
import PinState from "./PinState";

export default function MenuSidebar({ children }: { children: ReactNode }) {
    return (
        <div className="drawer lg:drawer-open h-100">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <RiMenuLine />
                    </label>
                    <Header />
                </nav>
                {/* Page content here */}
                    {children}

            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <div className="menu w-full grow is-drawer-close:p-0 is-drawer-open:p-5"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'gainsboro',
                            textAlign: 'center',
                            maxWidth: 400,
                            justifyContent: 'space-between',
                            fontSize: 24
                        }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                            <Link href="/" className="btn btn-outline is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-open:h-25"
                                data-tip="Homepage"
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderWidth: 0,
                                }}>
                                {/* Home icon */}
                                <RiHome2Fill />
                                <div className="is-drawer-close:hidden"
                                    style={{
                                        width: '100%',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }}>
                                    <div>Home</div>
                                    <div className="divider" style={{
                                        marginTop: 0,
                                        width: '100%',
                                    }} />
                                </div>
                            </Link>

                            <div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 5
                                    }}>
                                    <RiDashboardFill />
                                    <div className="is-drawer-close:hidden">
                                        Dashboard
                                    </div>

                                </div>

                                <div className="is-drawer-close:hidden"
                                    style={{
                                        fontSize: 16,
                                        marginLeft: 20
                                    }}>
                                    <div
                                        style={{
                                            display: 'flex'
                                        }}>
                                        <PinState/> Recent
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex'
                                        }}>
                                        <PinState/> Water Tanks
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                            <button className="btn btn-outline"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    gap: 5,
                                    borderWidth: 0
                                }}>
                                <RiSettings3Fill />
                                <div className="is-drawer-close:hidden">
                                    Settings
                                </div>
                            </button>
                            <button className="btn btn-outline"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    gap: 5,
                                    borderWidth: 0
                                }}>
                                <RiQuestionLine />
                                <div className="is-drawer-close:hidden">
                                    Help
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}