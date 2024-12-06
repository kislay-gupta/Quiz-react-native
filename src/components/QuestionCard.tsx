import { View, Text } from "react-native";
import React from "react";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import Card from "./Card";

type QuestionCard = {
  question: Question;
};
export default function QuestionCard({
  question: { title, correctAnswer, options },
}: QuestionCard) {
  const selectedOption = options[0];
  const onOptionSelected = (option: string) => {
    console.warn("selected", option);
  };
  return (
    <Card title={title}>
      <View style={{ gap: 10 }}>
        {options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            isSelected={option === selectedOption}
            onPress={() => onOptionSelected(option)}
          />
        ))}
      </View>
    </Card>
  );
}
