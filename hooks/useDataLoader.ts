import { useState, useEffect } from 'react';
import * as d3 from 'd3';

interface DataPoint {
    date: Date;
    value: number;
}

const useDataLoader = (url: string) => {
    const [data, setData] = useState<DataPoint[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const csvData = await d3.csv(url);
                const parsedData = csvData.map((d: any) => ({
                    date: new Date(d.date),
                    value: +d.value,
                }));
                setData(parsedData);
            } catch (err) {
                setError('Failed to load data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useDataLoader;