import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../utility/colors";
import Text from "./Text";

const Explanation = ({ isCorrect, explanation }) => {
  console.log({ isCorrect });
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.resultText,
          isCorrect && { color: colors.primary },
          !isCorrect && { color: colors.danger },
        ]}
      >
        {isCorrect ? "Correct" : ""}
        {!isCorrect ? "Incorrect" : ""}
      </Text>
      <Text style={styles.explainText}>{explanation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "gray",
    gap: 18,
  },
  resultText: {
    textAlign: "left",
    fontWeight: "bold",
  },
});

export default Explanation;
