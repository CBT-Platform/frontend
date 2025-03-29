"use client";
import { useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import QuestionMenu from "../../components/QuestionMenu";
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
    if (selectedAnswers[currentQuestionIndex] === answer) {
      setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: null });
    } else {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: answer,
      });
    }
  };

  const handleMarkForReview = () => {
    setMarkedForReview({
      ...markedForReview,
      [currentQuestionIndex]: !markedForReview[currentQuestionIndex],
    });
  };

  return (
    <div className="flex justify-between p-6 min-h-screen bg-gray-100">
      {/* Question Section */}
      <div className="w-2/3 pr-6">
        <h2 className="text-xl font-bold mb-4 text-black">
          Question {currentQuestionIndex + 1}
        </h2>
        <QuestionCard
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          selectedAnswer={selectedAnswers[currentQuestionIndex]}
          handleSelectAnswer={handleSelectAnswer}
        />
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
                ? "bg-red-500 text-white"
                : "bg-green-400 text-white"
            }`}
          >
            {markedForReview[currentQuestionIndex]
              ? "Unmark Review"
              : "Mark for Review"}
          </button>
        </div>
      </div>

      {/* Question Menu */}
      <QuestionMenu
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        markedForReview={markedForReview}
        selectedAnswers={selectedAnswers}
        questionsLength={questions.length}
      />
    </div>
  );
};

export default TestPage;
