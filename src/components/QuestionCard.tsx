import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";

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
    <View style={style.questionCard}>
      <Text style={style.question}>{title}</Text>
      <View style={{ gap: 10 }}>
        {options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            isSelected={option === selectedOption}
            onPress={() => onOptionSelected(option)}
          />
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  questionCard: {
    backgroundColor: "white",
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  question: { fontSize: 20, fontWeight: "500" },
});
