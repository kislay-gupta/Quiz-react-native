import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
type QuizContext = {
  question?: Question;
  questionIndex: number;
  onNextClick: () => void;
  selectedOption?: string;
  setSelectedOption: (newOption: string) => void;
  score: number;
  totalQuestion: number;
};
import questions from "../questions";
import { Question } from "../types";
export const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  onNextClick: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestion: 0,
});
export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const question = questions[questionIndex];
  const isFinished = questionIndex >= questions.length;
  const restart = () => {
    setQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
  };
  const onNextClick = () => {
    if (isFinished) {
      restart();
      return;
    }
    if (selectedOption == question?.correctAnswer) setScore((val) => val + 1);
    setQuestionIndex((currValue) => currValue + 1);
  };
  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNextClick,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestion: questions.length,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);
