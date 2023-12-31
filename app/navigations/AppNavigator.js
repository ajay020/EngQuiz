import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "../components/Icon";
import colors from "../utility/colors";
import HomeNavigator from "./HomeNavigator";
import GameNavigator from "./GameNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarLabel: "",
        tabBarItemStyle: {
          paddingVertical: 0,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={"home"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Games"
        component={GameNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={"dumbbell"} color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={"finance"} color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default AppNavigator;
