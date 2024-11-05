import Papa from "papaparse";

export const loadCSVData = async (filePath: string) => {
    const response = await fetch(filePath);
    const csvData = await response.text();

    const parsedData = Papa.parse<{ Time: string; Value: string }>(csvData, {
        header: true,
        skipEmptyLines: true,
        delimiter: ";",
    });

    return parsedData.data.map((row: { Time: string; Value: string }) => ({
        time: new Date(row.Time),
        value: parseFloat(row.Value),
    }));
};