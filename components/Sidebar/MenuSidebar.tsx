import { RiHome2Fill, RiPushpinFill, RiPushpinLine, RiQuestionLine, RiSettings3Fill, RiUnpinFill } from "@remixicon/react";
import Link from "next/link";

export default function MenuSidebar() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'gainsboro',
                textAlign: 'center',
                alignItems: 'center',
                maxWidth: 400,
                padding: 20,
                justifyContent: 'space-between',
                fontSize: 24
            }}>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Link href='/'
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection:'column',
                    alignItems: 'center'
                }}>
                    <RiHome2Fill />
                <div>Home</div>
                <div className="divider" style={{
                    marginTop: 0
                }} />
                </Link>
                
                <div>
                    <div>
                        Dashboard
                    </div>

                    <div
                    style={{
                        fontSize: 16
                    }}>
                        <div
                            style={{
                                display: 'flex'
                            }}>
                            <RiPushpinLine /> Recent
                        </div>
                        <div
                            style={{
                                display: 'flex'
                            }}>
                            <RiUnpinFill /> Water Tanks
                        </div>
                    </div>
                </div>
            </div>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5
                    }}>
                    <RiSettings3Fill />
                    <div>
                        Settings
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5
                    }}>
                    <RiQuestionLine />
                    <div>
                        Help
                    </div>
                </div>
            </div>
        </div>
    )
}