'use client';

import { RiArrowLeftLine } from '@remixicon/react';
import { useRouter } from 'next/navigation';

export default function GoBackButton() {
    const router = useRouter();

    const goBack = () => {
        if (window.history.length > 1) {
            router.back(); // Go back if there's history
        } else {
            router.push('/'); // Fallback to home page if no history
        }
    };

    return (
        <button
            onClick={goBack}
            className="btn btn-outline border-0"
        >
            <RiArrowLeftLine />
        </button>
    );
}