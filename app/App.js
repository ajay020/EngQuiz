import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./navigations/AppNavigator";
import HomeNavigator from "./navigations/HomeNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
