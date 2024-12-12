import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
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
  bestScore: number;
};
import AsyncStorage from "@react-native-async-storage/async-storage";
import questions from "../questions";
import { Question } from "../types";
export const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  onNextClick: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestion: 0,
  bestScore: 0,
});
export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const question = questions[questionIndex];
  const isFinished = questionIndex >= questions.length;
  useEffect(() => {
    loadBestScore();
  }, []);
  useEffect(() => {
    if (isFinished === true && score > bestScore) {
      setBestScore(score);
      saveBestScore(score);
    }
  }, [isFinished]);
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
  const saveBestScore = async (score: number) => {
    try {
      await AsyncStorage.setItem("best-score", score.toString());
    } catch (error) {}
  };
  const loadBestScore = async () => {
    try {
      const value = await AsyncStorage.getItem("best-score");
      if (value !== null) {
        setBestScore(Number.parseInt(value));
      }
    } catch (error) {}
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
        bestScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);
