"use client";
import { useState } from "react";

// Sample Data (Replace with API fetch later)
const studentResults = [
    { name: "Alice", exam: "Math Test", score: 8, total: 10, status: "Passed" },
    { name: "Bob", exam: "Math Test", score: 6, total: 10, status: "Passed" },
    { name: "Charlie", exam: "Science Quiz", score: 4, total: 10, status: "Failed" },
];

const ReportsPage = () => {
    return (
        <div className="p-6 min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Student Exam Reports</h1>
            <table className="w-full bg-white shadow rounded">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="p-2">Student</th>
                        <th className="p-2">Exam</th>
                        <th className="p-2">Score</th>
                        <th className="p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {studentResults.map((result, idx) => (
                        <tr key={idx} className="border-t">
                            <td className="p-2">{result.name}</td>
                            <td className="p-2">{result.exam}</td>
                            <td className="p-2">{result.score}/{result.total}</td>
                            <td className="p-2">
                                <span
                                    className={`px-3 py-1 rounded text-white ${result.status === "Passed" ? "bg-green-500" : "bg-red-500"
                                        }`}
                                >
                                    {result.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsPage;
