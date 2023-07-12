import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SectionList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feed } from "./pages/Feed";
import { Event } from "./pages/Event";
import { Calendar } from "./pages/Calendar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Feed} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Calendar" component={Calendar} />
      </Stack.Navigator>
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
