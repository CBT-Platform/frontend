import { FC } from "react";

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedAnswer: string | null;
  handleSelectAnswer: (answer: string) => void;
}

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  options,
  selectedAnswer,
  handleSelectAnswer,
}) => {
  return (
    <div>
      <p className="mb-4 text-black">{question}</p>
      <div className="space-y-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`p-3 border cursor-pointer rounded-md hover:bg-gray-300 text-black ${
              selectedAnswer === option ? "bg-blue-200" : ""
            }`}
            onClick={() => handleSelectAnswer(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
