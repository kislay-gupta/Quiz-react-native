import {
  View,
  Text,
  Pressable,
  StyleSheet,
  PressableProps,
} from "react-native";
import React from "react";
type CustomButton = {
  title: string;
  rightIcon?: React.ReactNode;
} & PressableProps;
export default function CustomButton({
  title,
  rightIcon,
  ...pressableProps
}: CustomButton) {
  console.log(pressableProps);
  return (
    <Pressable {...pressableProps} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.buttonIcon}>{rightIcon}</View>
      {/* <FontAwesome6
        name="arrow-right-long"
        size={16}
        color="white"
        style={styles.buttonIcon}
      /> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
