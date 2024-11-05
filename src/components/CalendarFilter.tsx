import { useState } from "react";

interface CalendarFilterProps {
    onDateRangeChange: (startDate: Date, endDate: Date) => void;
}

export const CalendarFilter: React.FC<CalendarFilterProps> = ({ onDateRangeChange }) => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleSubmit = () => {
        if (startDate && endDate) onDateRangeChange(startDate, endDate);
    };

    return (
        <div className="flex space-x-4 mb-4">
            <input
                type="date"
                onChange={e => setStartDate(new Date(e.target.value))}
                className="p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="date"
                onChange={e => setEndDate(new Date(e.target.value))}
                className="p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Filter
            </button>
        </div>
    );
};
