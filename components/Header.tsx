import { RiAccountCircleFill, RiArrowLeftLine, RiHome2Fill, RiMenu2Line } from "@remixicon/react";
import GoBackButton from "./GoBackButton";

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
            <GoBackButton/>
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