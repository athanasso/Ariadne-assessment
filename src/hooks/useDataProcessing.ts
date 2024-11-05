import { useMemo } from "react";

interface DataPoint {
    time: Date;
    value: number;
}

export const useDataProcessing = (data: DataPoint[], normalize: boolean) => {
    const yearlyAverage = useMemo(
        () => data.reduce((sum, point) => sum + point.value, 0) / data.length,
        [data]
    );

    const processedData = useMemo(() => {
        return data.map(point => {
        const normalizedValue = normalize ? (point.value / yearlyAverage) * 100 : point.value;
        return { ...point, normalizedValue, color: point.value > yearlyAverage ? "green" : "red" };
        });
    }, [data, normalize, yearlyAverage]);

    return { processedData, yearlyAverage };
};