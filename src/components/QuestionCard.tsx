import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AnswerOption from "./AnswerOption";

export default function QuestionCard() {
  return (
    <View style={style.questionCard}>
      <Text style={style.question}>What is react native?</Text>
      <View style={{ gap: 10 }}>
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
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
  question: { fontSize: 24, fontWeight: "500" },
});
