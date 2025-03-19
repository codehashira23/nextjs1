"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ResultCard from "../../components/resultcard"; // Import ResultCard component

const ExamAttempt = ({ params }: { params: { examId: string } }) => {
    const router = useRouter();
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [timeLeft, setTimeLeft] = useState(60 * 5); // 5-minute exam
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [totalMarks, setTotalMarks] = useState(0);

    // Define Questions
    const questions = [
        { id: 1, text: "What is 2 + 2?", options: ["1", "2", "3", "4"], correct: "4" },
        { id: 2, text: "Capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: "Paris" },
    ];

    // Calculate Maximum Marks (Total Number of Questions)
    const maximumMarks = questions.length;

    // Timer Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    handleSubmit();
                    clearInterval(interval);
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Handle Option Selection
    const handleOptionSelect = (questionId: number, option: string) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: option,
        }));
    };

    // Handle Exam Submission
    const handleSubmit = () => {
        let score = 0;
        questions.forEach((q) => {
            if (answers[q.id] === q.correct) {
                score += 1;
            }
        });

        setTotalMarks(score); // Update total marks
        setShowResult(true); // Show result card
    };

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            {/* Show Result Card when exam is submitted */}
            {showResult && (
                <ResultCard
                    totalMarks={totalMarks}
                    maximumMarks={maximumMarks}
                    onClose={() => setShowResult(false)}
                />
            )}

            {/* Exam Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Exam {params.examId}</h1>
                <p className="text-lg font-semibold text-red-500">
                    Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
                </p>
            </div>

            {/* Question Card */}
            <div className="p-4 bg-white shadow rounded">
                <h3 className="text-lg font-semibold">{questions[currentQuestion].text}</h3>
                <div className="mt-2 space-y-2">
                    {questions[currentQuestion].options.map((option) => (
                        <label
                            key={option}
                            className={`block p-2 border rounded cursor-pointer ${answers[questions[currentQuestion].id] === option ? "bg-blue-500 text-white" : "bg-gray-100"
                                }`}
                        >
                            <input
                                type="radio"
                                name={`question-${questions[currentQuestion].id}`}
                                className="hidden"
                                onChange={() => handleOptionSelect(questions[currentQuestion].id, option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-4 flex justify-between">
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
                    disabled={currentQuestion === 0}
                    onClick={() => setCurrentQuestion((prev) => prev - 1)}
                >
                    Previous
                </button>

                {currentQuestion < questions.length - 1 ? (
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                        onClick={() => setCurrentQuestion((prev) => prev + 1)}
                    >
                        Next
                    </button>
                ) : (
                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded"
                        onClick={handleSubmit}
                    >
                        Submit Exam
                    </button>
                )}
            </div>
        </div>
    );
};

export default ExamAttempt;
