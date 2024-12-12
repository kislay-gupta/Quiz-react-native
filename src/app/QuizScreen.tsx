import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import React, { useState, useContext, useEffect, useRef } from "react";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { QuizContext, useQuizContext } from "../providers/QuizProvider";
import { useTimer } from "../hooks/useTimer";
import LottieView from "lottie-react-native";

const QuizScreen = () => {
  const {
    question,
    questionIndex,
    onNextClick,
    score,
    totalQuestion,
    bestScore,
  } = useQuizContext();
  const { time, startTimer, clearTimer } = useTimer();
  useEffect(() => {
    startTimer();
    return () => {
      clearTimer();
    };
  }, [question]);
  useEffect(() => {
    if (question && time <= 0) {
      onNextClick();
    }
  }, [time]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* header */}
        <View>
          <Text style={styles.title}>
            Question {questionIndex + 1}/{totalQuestion}
          </Text>
        </View>
        {/* body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>{time}</Text>
          </View>
        ) : (
          <>
            <LottieView
              source={require("../../assets/party.json")}
              style={StyleSheet.absoluteFill}
              autoPlay
              loop={false}
            />
            <Card title="well done">
              <Text>
                Correct answers {score}/{totalQuestion}
              </Text>
              <Text>best answers {bestScore}</Text>
            </Card>
          </>
        )}
        <CustomButton
          title="Next"
          onPress={() => onNextClick()}
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
        />
        {/* footer */}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fdfef4" },
  container: {
    flex: 1,
    justifyContent: "space-around",

    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
  time: {
    textAlign: "center",
    marginTop: 15,
    color: "#005055",
    fontWeight: "bold",
  },
});
