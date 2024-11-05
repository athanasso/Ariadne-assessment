import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register all necessary components (scales, controllers, elements)
Chart.register(...registerables);

interface ChartData {
    labels: string[];
    values: number[];
}

interface ChartDisplayProps {
    data: ChartData;
    type: "line" | "bar";
}

const ChartDisplay: React.FC<ChartDisplayProps> = ({ data, type }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Footfall Data',
                data: data.values,
                backgroundColor: type === "bar" ? "rgba(75, 192, 192, 0.6)" : "rgba(255, 99, 132, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="my-6 p-4 border rounded-lg shadow-lg bg-white">
            {type === "bar" ? (
                <Bar data={chartData} />
            ) : (
                <Line data={chartData} />
            )}
        </div>
    );
};

export default ChartDisplay;
