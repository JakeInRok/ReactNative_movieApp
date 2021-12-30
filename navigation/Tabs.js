import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";
import { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? colors.BLACK : "white",
      }}
      screenOptions={{
        unmountOnBlur: true,
        headerStyle: { backgroundColor: isDark ? colors.BLACK : "white" },
        headerTitleStyle: { color: isDark ? "white" : colors.BLACK },
        tabBarStyle: { backgroundColor: isDark ? colors.BLACK : "white" },
        tabBarActiveTintColor: isDark ? colors.YELLOW : colors.BLACK,
        tabBarInactiveTintColor: isDark ? colors.WHITE : colors.GREY,
      }}
    >
      <Tab.Screen
        name="movie"
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tv-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
