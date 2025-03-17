"use client";
import { useState, useEffect } from "react";

const MonitoringPage = () => {
    const [studentActivity, setStudentActivity] = useState([
        { student: "Alice", exam: "Math Test", action: "Started Exam", timestamp: "10:00 AM" },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch("/api/monitoring")
                .then((res) => res.json())
                .then((data) => setStudentActivity(data.logs));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6 min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Real-Time Monitoring</h1>
            <table className="w-full bg-white shadow rounded">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="p-2">Student</th>
                        <th className="p-2">Exam</th>
                        <th className="p-2">Action</th>
                        <th className="p-2">Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {studentActivity.map((activity, idx) => (
                        <tr key={idx} className="border-t">
                            <td className="p-2">{activity.student}</td>
                            <td className="p-2">{activity.exam}</td>
                            <td className="p-2">{activity.action}</td>
                            <td className="p-2">{activity.timestamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MonitoringPage;
