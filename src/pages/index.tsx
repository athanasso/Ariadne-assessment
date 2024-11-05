import { useState, useEffect } from "react";
import { loadCSVData } from "../utils/csvLoader";
import { useDataProcessing } from "../hooks/useDataProcessing";
import ChartDisplay from "../components/ChartDisplay";
import { CalendarFilter } from "../components/CalendarFilter";
import '../styles/globals.css';

// Import dynamic from next/dynamic
import dynamic from 'next/dynamic';

// Dynamically import MapDisplay with SSR disabled
const MapDisplay = dynamic(() => import('../components/MapDisplay'), {
    ssr: false,
});

export default function HomePage() {
    const [data, setData] = useState<{ time: Date; value: number }[]>([]);
    const [chartType, setChartType] = useState<"line" | "bar">("line");
    const [normalize, setNormalize] = useState(false);
    const [filteredData, setFilteredData] = useState<{ time: Date; value: number }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const rawData = await loadCSVData("/Footfall1.csv");
            setData(rawData);
            setFilteredData(rawData); // Set initial data
        };
        fetchData();
    }, []);

    const { processedData } = useDataProcessing(filteredData, normalize);

    const handleDateRangeChange = (start: Date, end: Date) => {
        setFilteredData(data.filter(d => d.time >= start && d.time <= end));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Data Visualization App</h1>
            <CalendarFilter onDateRangeChange={handleDateRangeChange} />
            <div className="flex justify-center space-x-4 my-4">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-500 transition"
                    onClick={() => setChartType("line")}
                >
                    Line Chart
                </button>
                <button
                    className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-500 transition"
                    onClick={() => setChartType("bar")}
                >
                    Bar Chart
                </button>
                <button
                    className="px-4 py-2 bg-gray-600 text-white rounded shadow hover:bg-gray-500 transition"
                    onClick={() => setNormalize(!normalize)}
                >
                    Toggle {normalize ? "Raw" : "Normalized"} Data
                </button>
            </div>
            <ChartDisplay
                data={{
                    labels: processedData.map(d => d.time.toLocaleString()),
                    values: processedData.map(d => normalize ? d.normalizedValue : d.value)
                }}
                type={chartType}
            />
            <MapDisplay />
        </div>
    );
}
