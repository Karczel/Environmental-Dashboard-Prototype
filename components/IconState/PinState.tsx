'use client'

import { RiPushpinFill, RiUnpinLine } from "@remixicon/react";
import { useState } from "react";

export default function PinState() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: 'pointer' }}
        >
            {isHovered ? (
                <RiUnpinLine size={24} />
            ) : (
                <RiPushpinFill size={24} />
            )}
        </div>
    );
}