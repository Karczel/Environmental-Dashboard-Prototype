import { RiAccountCircleFill, RiArrowLeftLine, RiHome2Fill, RiMenu2Line } from "@remixicon/react";

export default function Header()
{
    return (
        <div
        style={{
            display: 'flex',
            width: '100%',
            height: '40px',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'gainsboro'
        }}>
            <div
            style={{
                display: 'flex'
            }}>
                <RiMenu2Line/>
                <RiArrowLeftLine/>
            </div>
            <div
            style={{
                display: 'flex'
            }}>
                <div>
                    Welcome! Alert
                </div>
                <RiAccountCircleFill/>
            </div>
        </div>
    )
}