import { RiAccountCircleFill, RiArrowLeftLine, RiHome2Fill } from "@remixicon/react";

export default function Header()
{
    return (
        <div
        style={{
            display: 'flex',
            width: '100%',
            height: '40px',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <div
            style={{
                display: 'flex'
            }}>
                <RiHome2Fill/>
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