import { View, Text } from "react-native";
import React, { useState } from "react";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import Card from "./Card";

type QuestionCard = {
  question: Question;
};
export default function QuestionCard({
  question: { title, correctAnswer, options },
}: QuestionCard) {
  return (
    <Card title={title}>
      <View style={{ gap: 10 }}>
        {options.map((option) => (
          <AnswerOption key={option} option={option} />
        ))}
      </View>
    </Card>
  );
}
