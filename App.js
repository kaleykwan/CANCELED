import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SectionList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feed } from "./pages/Feed";
import { Event } from "./pages/Event";
import { Calendar } from "./pages/Calendar";
import { Profile } from "./pages/Profile";
import Auth from "./pages/Auth";
import { supabase } from "./supabase";
import { Session } from '@supabase/supabase-js'

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
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View style={styles.container}>
      {session && session.user ?
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
      : <Auth />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
