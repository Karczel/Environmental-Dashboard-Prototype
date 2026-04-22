'use client';

import ResourceCustomizer from '@/components/Resource/ResourceCustomizer';
import ResourceMain from '@/components/Resource/ResourceMain';
// import { useParams } from 'next/navigation';

export default function ResourcesPage() {
    // const params = useParams();
    // const id = params.resource_id as string;
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}>
            <ResourceMain />
            <ResourceCustomizer />
        </div>
    );
}