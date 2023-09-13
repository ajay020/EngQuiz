import React, { useEffect, useState } from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useSentenceCounts from "../hooks/useSentenceCount";

import colors from "../utility/colors";
import Icon from "./Icon";

const SentenceModal = ({
  words,
  handleRetakeQuiz,
  modalVisible,
  moveToNextSentence,
  timeLeft,
  level = 1,
}) => {
  const navigation = useNavigation();
  const { total, completed, fetchSentenceCount } = useSentenceCounts(level);
  let arrangedSentence = words?.reduce(
    (acc, word) => acc + " " + word.text,
    ""
  );

  useEffect(() => {
    fetchSentenceCount();
  }, [modalVisible]);

  let timeTaken = 60 - timeLeft;

  let star1 = "star-outline";
  let star2 = "star-outline";
  let star3 = "star-outline";
  let color1 = colors.gray4;
  let color2 = colors.gray4;
  let color3 = colors.gray4;

  if (timeTaken < 12) {
    star1 = "star";
    star2 = "star";
    star3 = "star";

    color1 = colors.golden;
    color2 = colors.golden;
    color3 = colors.golden;
  } else if (timeTaken >= 12 && timeTaken < 25) {
    star1 = "star";
    star2 = "star";

    color1 = colors.golden;
    color2 = colors.golden;
  } else if (timeTaken >= 25 && timeTaken < 60) {
    star1 = "star";
    color1 = colors.golden;
  }

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={false}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.closeIconContainer}
      >
        <Icon name={"close"} size={35} />
      </TouchableOpacity>
      <View style={styles.modalContainer}>
        {timeTaken >= 60 ? (
          <Text style={styles.ansTxt}> Try again </Text>
        ) : (
          <Text style={styles.ansTxt}>{arrangedSentence}</Text>
        )}

        <View style={styles.performance}>
          <View style={styles.ratingContainer}>
            <Icon name={star1} size={70} color={color1} />
            <Icon name={star2} size={70} color={color2} />
            <Icon name={star3} size={70} color={color3} />
          </View>

          <View style={styles.timeContainer}>
            <Icon name={"clock-outline"} color={colors.black} size={24} />
            <Text style={styles.timeTaken}>{60 - timeLeft} seconds</Text>
          </View>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>
              {completed + 1}/{total}
            </Text>
          </View>
        </View>

        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={handleRetakeQuiz}>
            <Icon name={"reload"} size={40} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={moveToNextSentence}>
            <Icon name={"arrow-right"} size={40} color={colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
    width: 200,
  },
  ansTxt: {
    fontSize: 30,
    color: colors.black,
    textAlign: "center",
    padding: 12,
  },
  countContainer: {
    // backgroundColor: "gray",
  },
  countText: {
    fontSize: 20,
  },
  modalContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
  },
  closeIconContainer: {
    backgroundColor: "white",
    paddingLeft: 28,
    paddingTop: 24,
  },
  performance: {
    // backgroundColor: colors.gray2,
    gap: 24,
    alignItems: "center",
  },
  ratingContainer: {
    // backgroundColor: "brown",
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  timeTaken: {
    fontSize: 20,
    color: colors.black,
    textAlign: "center",
  },
  timeContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});

export default SentenceModal;
