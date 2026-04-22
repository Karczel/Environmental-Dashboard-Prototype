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
                display: 'flex',
                gap: 5
            }}>
                <div>
                    Welcome! Alert Goes Here
                </div>
                <RiAccountCircleFill/>
            </div>
        </div>
    )
}