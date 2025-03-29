import { FC } from "react";

interface QuestionMenuProps {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  markedForReview: { [key: number]: boolean };
  selectedAnswers: { [key: number]: string | null };
  questionsLength: number;
}

const QuestionMenu: FC<QuestionMenuProps> = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  markedForReview,
  selectedAnswers,
  questionsLength,
}) => {
  return (
    <div className="w-1/3 pl-6">
      <h3 className="text-lg font-semibold mb-4">Question Menu</h3>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: questionsLength }).map((_, index) => {
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
  );
};

export default QuestionMenu;
