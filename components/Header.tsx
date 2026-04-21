import { RiAccountCircleFill, RiArrowLeftLine, RiHome2Fill, RiMenu2Line } from "@remixicon/react";

export default function Header()
{
    return (
        <div
        style={{
            width: '100%',
            display: 'flex',
            height: '40px',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <div
            style={{
                display: 'flex'
            }}>
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