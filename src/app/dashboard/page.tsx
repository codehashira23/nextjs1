"use client";

const DashboardPage = () => {
    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
            <AdminDashboard />
        </div>
    );
};

// Admin Dashboard View
const AdminDashboard = () => {
    // Example data for results
    const examResults = [
        {
            examName: "Math Test",
            students: [
                { name: "John Doe", marks: 85 },
                { name: "Jane Smith", marks: 92 },
            ],
        },
        {
            examName: "Science Quiz",
            students: [
                { name: "John Doe", marks: 78 },
                { name: "Jane Smith", marks: 88 },
            ],
        },
    ];

    return (
        <div className="space-y-8">
            {examResults.map((exam, idx) => (
                <div key={idx} className="p-6 bg-white shadow rounded">
                    <h2 className="text-xl font-bold mb-4">{exam.examName}</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2 text-left">Student Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exam.students.map((student, studentIdx) => (
                                <tr key={studentIdx}>
                                    <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{student.marks}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default DashboardPage;