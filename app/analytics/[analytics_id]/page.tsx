'use client';

import AnalyticsCustomizer from '@/components/Analytics/AnalyticsCustomizer';
import AnalyticsMain from '@/components/Analytics/AnalyticsMain';
// import { useParams } from 'next/navigation';

export default function AnalyticsPage() {
    // const params = useParams();
    // const id = params.analytics_id as string;

    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
        }}>
            <AnalyticsMain/>
            <AnalyticsCustomizer/>
        </div>
    )
}