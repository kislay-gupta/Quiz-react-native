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

const QuizScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* header */}
        <View>
          <Text style={styles.title}>Question 1</Text>
        </View>
        {/* body */}
        <View>
          <QuestionCard />
          <Text style={styles.time}>20sec</Text>
        </View>
        {/* footer */}
        <Pressable
          onPress={() => {
            console.warn("Pressed");
          }}
          style={styles.button}
          onLongPress={() => {
            console.warn("Press long");
          }}
        >
          <Text style={styles.buttonText}>Next</Text>
          <FontAwesome6
            name="arrow-right-long"
            size={16}
            color="white"
            style={styles.buttonIcon}
          />
        </Pressable>
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
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "100",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: "absolute",
    right: 20,
  },
});
