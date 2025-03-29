"use client";
import { useState } from "react";
import { questions } from "./questions"; // Importing questions from separate file

const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string | null;
  }>({});
  const [markedForReview, setMarkedForReview] = useState<{
    [key: number]: boolean;
  }>({});

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
  };

  const handleMarkForReview = () => {
    setMarkedForReview({
      ...markedForReview,
      [currentQuestionIndex]: !markedForReview[currentQuestionIndex],
    });
  };

  return (
    <div className="flex justify-between p-6">
      {/* Question Section */}
      <div className="w-2/3 pr-6">
        <h2 className="text-xl font-bold mb-4">
          Question {currentQuestionIndex + 1}
        </h2>
        <p className="mb-4">{questions[currentQuestionIndex].question}</p>
        <div className="space-y-4">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div
              key={index}
              className={`p-3 border cursor-pointer rounded-md hover:bg-gray-100 ${
                selectedAnswers[currentQuestionIndex] === option
                  ? "bg-gray-200"
                  : ""
              }`}
              onClick={() => handleSelectAnswer(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="mt-4 space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
          <button
            onClick={handleMarkForReview}
            className={`px-4 py-2 rounded-md ${
              markedForReview[currentQuestionIndex]
                ? "bg-purple-500 text-white"
                : "bg-gray-400 text-black"
            }`}
          >
            {markedForReview[currentQuestionIndex]
              ? "Unmark Review"
              : "Mark for Review"}
          </button>
        </div>
      </div>

      {/* Question Menu */}
      <div className="w-1/3 pl-6">
        <h3 className="text-lg font-semibold mb-4">Question Menu</h3>
        <div className="grid grid-cols-5 gap-2">
          {questions.map((_, index) => {
            let btnColor = "bg-gray-200 text-gray-700"; // Default: Unattempted
            if (currentQuestionIndex === index) {
              btnColor = "bg-blue-500 text-white"; // Active Question
            } else if (markedForReview[index]) {
              btnColor = "bg-red-500 text-white"; // Marked for Review
            } else if (selectedAnswers[index]) {
              btnColor = "bg-green-500 text-white"; // Attempted
            }

            return (
              <button
                key={index}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`w-14 h-14 flex items-center justify-center text-lg font-semibold rounded-md ${btnColor}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
