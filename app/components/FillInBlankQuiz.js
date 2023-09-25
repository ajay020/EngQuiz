import { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../utility/colors";
import AppButton from "./AppButton";
import Explanation from "./Explanation";

const FillInBlank = ({ question, handleNextQeustion }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [btnBgColor, setBtnBgColor] = useState(colors.gray3);
  const [isActive, setIsActive] = useState(false);

  const [inputValues, setInputValues] = useState(
    Array.from(question?.text.matchAll(/_+/g), () => "")
  );

  useEffect(() => {
    let isTyped = inputValues?.some((val) => val.length > 0);
    if (isTyped) {
      setBtnBgColor(colors.primary);
      setIsActive(true);
    } else {
      setBtnBgColor(colors.gray3);
      setIsActive(false);
    }
  }, [inputValues]);

  const handleInputChange = (index, value) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = value;
    setInputValues(updatedInputValues);
  };

  const breakTextLineIntoWord = (line) => {
    return line.split(" ").map((word, index) => (
      <Text key={`text-${index}`} style={styles.questionText}>
        {word}
      </Text>
    ));
  };

  const getQuestionText = useCallback(() => {
    // Split the question text into parts using '___' as the delimiter
    const parts = question.text.split(/_+/);

    const questionElements = [];

    parts.forEach((part, index) => {
      questionElements.push(breakTextLineIntoWord(part));

      if (index < parts.length - 1) {
        questionElements.push(
          <TextInput
            key={`input-${index}`}
            style={styles.input}
            placeholder="Your answer"
            value={inputValues[index]}
            editable={!isValidated}
            onChangeText={(text) => handleInputChange(index, text)}
          />
        );
      }
    });

    return <View style={styles.questionRow}>{questionElements}</View>;
  }, [inputValues, isValidated]);

  const handleCheckAnswer = () => {
    // Get the user's input from the input fields (assuming user inputs are stored in an array)
    const userAnswers = inputValues.map((input) => input.trim().toLowerCase());

    const correctAnswers = question?.correctAnswers?.map((answer) =>
      answer.trim().toLowerCase()
    );

    // Check if the user's answers match the correct answers
    const isCorrect = userAnswers.every((userAnswer, index) => {
      return userAnswer === correctAnswers[index];
    });

    return isCorrect;
  };

  const handleSubmit = () => {
    setIsValidated(true);

    const isRight = handleCheckAnswer();

    if (isRight) {
      setIsCorrect(true);
      setBtnBgColor(colors.primary);
    } else {
      setIsCorrect(false);
      setBtnBgColor(colors.danger);
    }
  };

  const handleNext = () => {
    setIsValidated(false);
    setIsCorrect(false);
    setBtnBgColor(colors.gray3);
    setInputValues([]);

    handleNextQeustion();
  };

  const handlePress = () => {
    if (isValidated) {
      handleNext();
    } else {
      handleSubmit();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.questionContainer}>{getQuestionText()}</View>

          <View
            style={[
              styles.innerContainer,
              isValidated && { backgroundColor: "white" },
            ]}
          >
            {isValidated && (
              <Explanation
                isCorrect={isCorrect}
                explanation={question?.explanation}
              />
            )}
          </View>
          <AppButton
            style={[styles.button, { backgroundColor: btnBgColor }]}
            onPress={handlePress}
            disabled={!isActive}
            title={isValidated ? "Next" : "Check"}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 12,
    // backgroundColor: colors.gray3,
  },

  questionContainer: {
    flex: 1,
    paddingVertical: 12,
    // backgroundColor: colors.gray3,
  },
  innerContainer: {
    gap: 20,
    padding: 12,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 4,
    gap: 30,
  },

  questionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  questionText: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 40,
    letterSpacing: 0.5,
    marginRight: 4,
    // backgroundColor: "lightblue",
  },
  input: {
    width: 100,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: "blue",
    marginHorizontal: 4,
    // backgroundColor: "dodgerblue",
  },
});

export default FillInBlank;