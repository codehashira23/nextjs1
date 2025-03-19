"use client";
import { useState } from "react";

const userRole = "admin"; // Change to "admin" for admin dashboard

const DashboardPage = () => {
    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Welcome to Exam Portal</h1>

            {userRole !== "admin" ? <StudentDashboard /> : <AdminDashboard />}
        </div>
    );
};

// Student Dashboard View
const StudentDashboard = () => {
    const upcomingExams = [
        { name: "Math Test", date: "March 20, 2025" },
        { name: "Science Quiz", date: "March 25, 2025" },
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold mb-3">Upcoming Exams</h2>
            <div className="grid gap-4">

                {upcomingExams.map((exam, idx) => (
                    <div key={idx} className="p-4 bg-white shadow rounded">
                        <h3 className="text-lg font-bold">{exam.name}</h3>
                        <p className="text-gray-600">Date: {exam.date}</p>

                    </div>

                ))}

            </div>
        </div>
    );
};

// Admin Dashboard View
const AdminDashboard = () => {
    const stats = {
        totalStudents: 50,
        totalExams: 10,
        activeExams: 3,
    };

    return (
        <div className="grid gap-4">
            <StatCard title="Total Students" value={stats.totalStudents} />
            <StatCard title="Total Exams" value={stats.totalExams} />
            <StatCard title="Active Exams" value={stats.activeExams} />

            <p className="text-center text-sm mt-4">
                Do you want to create a new exam ? <a href="/exams/create" className="text-blue-600 hover:text-cyan-300">Add Exam</a>
            </p>

        </div>
    );
};

// Reusable Card for Stats
const StatCard = ({ title, value }: { title: string; value: number }) => (
    <div className="p-4 bg-white shadow rounded">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-2xl text-blue-600">{value}</p>
    </div>
);

export default DashboardPage;
