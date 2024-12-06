import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
const question = questions[4];
const QuizScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* header */}
        <View>
          <Text style={styles.title}>Question 1</Text>
        </View>
        {/* body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>20sec</Text>
          </View>
        ) : (
          <Card title="well done">
            <Text>Correct answers 3/5</Text>
          </Card>
        )}
        <CustomButton
          title="Next"
          onPress={() => console.warn("custom on press")}
          onLongPress={() => console.warn("long press")}
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
