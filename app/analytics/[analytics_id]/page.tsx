'use client';

import AnalyticsCustomizer from '@/components/Analytics/AnalyticsCustomizer';
import AnalyticsMain from '@/components/Analytics/AnalyticsMain';
import { useParams } from 'next/navigation';

export default function AnalyticsPage() {
    const params = useParams();
    const id = params.analytics_id as string;

    return (
        <div>
            Analytics Page {id}
            <div>
                Main
            </div>
            <AnalyticsMain/>
            <div>
                Customizer
            </div>
            <AnalyticsCustomizer/>
        </div>
    )
}