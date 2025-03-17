"use client";
import { useState } from "react";

const CreateExam = () => {
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [questions, setQuestions] = useState([{ text: "", options: ["", "", "", ""], answer: "" }]);

    const handleAddQuestion = () => {
        setQuestions([...questions, { text: "", options: ["", "", "", ""], answer: "" }]);
    };

    const handleSubmit = () => {
        console.log({ title, subject, questions });
    };

    return (
        <div className="p-6 min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Create Exam</h1>
            <div className="bg-white p-4 shadow rounded">
                <input
                    type="text"
                    placeholder="Exam Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                />

                {questions.map((q, idx) => (
                    <div key={idx} className="mb-4">
                        <input
                            type="text"
                            placeholder="Question"
                            value={q.text}
                            onChange={(e) => {
                                const newQuestions = [...questions];
                                newQuestions[idx].text = e.target.value;
                                setQuestions(newQuestions);
                            }}
                            className="w-full p-2 border rounded mb-2"
                        />
                        <div className="grid grid-cols-2 gap-2">
                            {q.options.map((option, optionIdx) => (
                                <input
                                    key={optionIdx}
                                    type="text"
                                    placeholder={`Option ${optionIdx + 1}`}
                                    value={option}
                                    onChange={(e) => {
                                        const newQuestions = [...questions];
                                        newQuestions[idx].options[optionIdx] = e.target.value;
                                        setQuestions(newQuestions);
                                    }}
                                    className="p-2 border rounded"
                                />
                            ))}
                        </div>
                        <select
                            value={q.answer}
                            onChange={(e) => {
                                const newQuestions = [...questions];
                                newQuestions[idx].answer = e.target.value;
                                setQuestions(newQuestions);
                            }}
                            className="w-full p-2 border rounded mt-2"
                        >
                            <option value="">Select Correct Answer</option>
                            {q.options.map((option, optionIdx) => (
                                <option key={optionIdx} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}

                <button onClick={handleAddQuestion} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add Question
                </button>
                <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded ml-2">
                    Create Exam
                </button>
            </div>
        </div>
    );
};

export default CreateExam;
