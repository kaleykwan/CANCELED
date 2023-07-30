import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SectionList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feed } from "./pages/Feed";
import { Event } from "./pages/Event";
import { Calendar } from "./pages/Calendar";
import { Profile } from "./pages/Profile";

const FeedStack = createNativeStackNavigator();

function FeedStackScreen() {
  return (
    <FeedStack.Navigator screenOptions={{ headerShown: false }}>
      <FeedStack.Screen name="Feed" component={Feed} />
      <FeedStack.Screen name="Event" component={Event} />
    </FeedStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }, { headerShown: false })}>
        <Tab.Screen name="Feed" component={FeedStackScreen} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name ="Calendar" component={Calendar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  eventList: {
    gap: 15,
  },
  eventCardDate: {
    backgroundColor: "#E31B58",
    width: 80,
    borderRadius: 10,
    padding: 10,
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  eventCard: {
    backgroundColor: "#F97DA3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    padding: 20,
    gap: 15,
    margin: 10,
  },
  eventCardHeader: {
    backgroundColor: "#F49FB9",
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  eventCardInfo: {
    flexDirection: "row",
    gap: 15,
  },
  eventCardProfiles: {
    backgroundColor: "#F49FB9",
    borderRadius: 10,
    padding: 10,
    width: 130,
  },
  eventCardLogistics: {
    backgroundColor: "#F49FB9",
    borderRadius: 10,
    padding: 10,
    width: 155,
    gap: 7,
  },
  cancelButton: {
    backgroundColor: "#F52C2C",
    borderColor: "#F52C2C",
    borderWidth: 5,
    borderRadius: 15,
    width: 250,
  },
});
