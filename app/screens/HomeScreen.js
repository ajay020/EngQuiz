import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, ActivityIndicator } from "react-native";
import { moderateScale } from "react-native-size-matters";

import topicData from "../database/grammer/topics";
import TopicListItem2 from "../components/TopicListItem2";
import cache from "../utility/cache";
import useQuizData from "../hooks/useQuizData";
import { useTheme } from "../theme/ThemeContext";
import { darkTheme, lightTheme } from "../utility/theme";

export default HomeScreen = ({ navigation }) => {
  const [topics, setTopics] = useState([]);
  const { completedQuizzes, loading, fetchCompletdQuizzes } = useQuizData();

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    async function clearCache() {
      await cache.clearAll();
    }
    // clearCache();
  }, []);

  useEffect(() => {
    calcualteCompletedQuiz();
  }, [loading]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // Screen has gained focus, fetch or update data here
      fetchCompletdQuizzes();
    });

    // Clean up the listener when component unmounts
    return unsubscribe;
  }, [navigation]);

  function calcualteCompletedQuiz() {
    // console.log({ completedQuizzes });
    let data = topicData.topics.map((topic) => {
      const quizCount = completedQuizzes.filter(
        (cq) => cq.topicId === topic.id
      ).length;
      return { ...topic, quizCompletedCount: quizCount };
    });
    // console.log({ data });
    setTopics([...data]);
  }

  return (
    <View style={{ backgroundColor: isDark ? darkTheme.background : lightTheme.background, flex: 1 }}>
      {loading && <ActivityIndicator color={"blue"} />}
      <FlatList
        style={styles.container}
        data={topics}
        numColumns={1}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => <TopicListItem2 item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20),
    // paddingVertical: 8,
    marginBottom: moderateScale(4),
  },
});
