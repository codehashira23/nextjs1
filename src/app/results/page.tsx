"use client";
import { useState } from "react";

// Sample Data (Replace with API fetch later)
const sampleResults = [
    {
        exam: "Math Test",
        score: 8,
        total: 10,
        status: "Passed",
        date: "March 20, 2025",
    },
    {
        exam: "Science Quiz",
        score: 5,
        total: 10,
        status: "Passed",
        date: "March 25, 2025",
    },
];

const ResultsPage = () => {
    return (
        <div className="min-h-screen p-6 bg-gray-800">
            <h1 className="text-2xl font-bold mb-4 text-amber-50">Your Exam Results</h1>
            <div className="grid gap-4">
                {sampleResults.map((result, idx) => (
                    <ResultCard key={idx} result={result} />
                ))}
            </div>
        </div>
    );
};

const ResultCard = ({
    result,
}: {
    result: { exam: string; score: number; total: number; status: string; date: string };
}) => (
    <div className="p-4 bg-white shadow rounded flex justify-between">
        <div>
            <h3 className="text-lg font-bold">{result.exam}</h3>
            <p className="text-gray-600">Score: {result.score}/{result.total}</p>
            <p className="text-gray-500">Date: {result.date}</p>
        </div>
        <span
            className={`text-white px-4 py-2 rounded ${result.status === "Passed" ? "bg-green-500" : "bg-red-500"
                }`}
        >
            {result.status}
        </span>
    </div>
);

export default ResultsPage;
