"use client";

const ResultCard = ({ totalMarks, maximumMarks, onClose }: { totalMarks: number; maximumMarks: number; onClose: () => void }) => {
    return (

        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-6 border-2 border-blue-500">
            <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold text-blue-600">Exam Submitted!</h2>

            </div>
            <p className="text-lg font-semibold mt-2">Total Marks: {totalMarks}/{maximumMarks} </p>
            <button onClick={onClose} className="text-red-500 text-xl font-bold ml-35"> close</button>

        </div>
    );
};

export default ResultCard;
