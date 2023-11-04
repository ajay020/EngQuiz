import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../utility/colors";
import Text from "./Text";
import { ScrollView } from "react-native-gesture-handler";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const Quiz = ({ question, selectedOptions, handleOptionSelect, quizTitle }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.quizTitle}>{quizTitle}</Text>
        <Text style={styles.questionTxt}>{question?.text}</Text>
        <View style={styles.optionContainer}>
          {question?.options?.map((option) => (
            <TouchableOpacity
              key={option.id}
              activeOpacity={0.9}
              onPress={() => handleOptionSelect(option)}
              style={[
                styles.option,
                selectedOptions.find(
                  (selectdOp) => selectdOp?.id === option?.id
                ) && {
                  backgroundColor: colors.gray5,
                },
              ]}
            >
              <Text style={[styles.optionTxt]}>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "gray",
    // height: "60%",
    // gap: 20,
    // flex: 1,
  },
  questionTxt: {
    color: colors.black,
    fontSize: moderateScale(18, 0.5),
    // marginVertical: verticalScale(12),
    marginBottom: verticalScale(16),
    fontWeight: "500",
    textAlign: "left",
  },
  optionContainer: {
    // backgroundColor: "teal",
    gap: verticalScale(14),
  },
  option: {
    borderWidth: 0.5,
    borderBottomWidth: moderateScale(2, 0.2),
    borderColor: colors.black,
    borderRadius: 10,
    // backgroundColor: "pink",
    padding: moderateScale(10, 0.5),
  },
  optionTxt: {
    color: colors.black,
    fontSize: moderateScale(18, 0.5),
    textAlign: "center",
  },
  quizTitle: {
    fontSize: moderateScale(18),
    // textAlign: "center",
  },
});

export default Quiz;
