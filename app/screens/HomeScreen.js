import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItemSeprator from "../components/ListItemSeprator";
import TopicListItem from "../components/home/TopicListItem";
import cache from "../utility/cache";
import topicData from "../database/grammer/topics";
import TopicListItem2 from "../components/TopicListItem2";

export default HomeScreen = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  //   console.log("HomeScreen render");

  const clearCache = async () => {
    await cache.clearAll();
  };

  useEffect(() => {
    setTopics(topicData.topics);
    clearCache();
  }, []);

  return (
    <FlatList
      data={topics}
      numColumns={2}
      ItemSeparatorComponent={ListItemSeprator}
      keyExtractor={(item) => item.id?.toString()}
      renderItem={({ item }) => <TopicListItem2 item={item} />}
    />
  );
};

const styles = StyleSheet.create({});
