"use client";
import { useRouter } from "next/navigation"; // Import useRouter
import { useState } from "react";

const exams = [
    { id: 1, title: "Math Test", subject: "Mathematics", time: "60 mins" },
    { id: 2, title: "Science Quiz", subject: "Science", time: "45 mins" },
];

const ExamList = () => {
    return (
        <div className="p-6 min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Available Exams</h1>
            <div className="grid gap-4">
                {exams.map((exam) => (
                    <ExamCard key={exam.id} exam={exam} />
                ))}
            </div>
        </div>
    );
};

const ExamCard = ({ exam }: { exam: { id: number; title: string; subject: string; time: string } }) => {
    const router = useRouter(); // Initialize useRouter

    const handleStartExam = (examId: number) => {
        router.push(`/exams/${examId}`); // Redirect to the exam attempt page
    };

    return (
        <div className="p-4 bg-white shadow rounded flex justify-between">
            <div>
                <h2 className="text-lg font-bold">{exam.title}</h2>
                <p className="text-gray-600">
                    {exam.subject} • {exam.time}
                </p>
            </div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleStartExam(exam.id)} // Call handleStartExam on click
            >
                Start Exam
            </button>
        </div>
    );
};

export default ExamList;