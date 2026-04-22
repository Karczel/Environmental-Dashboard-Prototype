'use client';

import AnalyticsCustomizer from '@/components/Analytics/AnalyticsCustomizer';
import AnalyticsMain from '@/components/Analytics/AnalyticsMain';
import { useState } from 'react';
// import { useParams } from 'next/navigation';

import { chartTypes } from '@/public/mockup_data/chartTypes';

export default function AnalyticsPage() {
    // const params = useParams();
    // const id = params.analytics_id as string;
    // const analyticsInfo = [
    //     {id: 1, name: "", chartType: 1, value: 0, threshold: 0, associatedResource: 1, note: ""}
    // ]

    // const [currentAnalytics, setCurrentAnalytics] = useState()
    const [currentChartTypeId, setCurrentChartTypeId] = useState(1)
    const [currentChartType, setCurrentChartType] = useState<ChartType>(chartTypes[0])
    // Find the chart type matching the current ID and update state
    const handleChartTypeChange = (id: number) => {
        setCurrentChartTypeId(id);
        const found = chartTypes.find(a => a.id === id);
        if (found) setCurrentChartType(found);
    }

    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
        }}>
            <AnalyticsMain chartTypeNode={currentChartType.chartNode}/>
            <AnalyticsCustomizer setcharttype={handleChartTypeChange}/>
        </div>
    )
}