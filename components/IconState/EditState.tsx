'use client'

import { RiEditFill, RiEditLine } from "@remixicon/react";
import { useState } from "react";

export default function EditState() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: 'pointer' }}
        >
            {isHovered ? (
                <RiEditFill size={40} />
            ) : (
                <RiEditLine size={40} />
            )}
        </div>
    );
}