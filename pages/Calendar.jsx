import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React from 'react';
import {View} from 'react-native';
import {Agenda} from "react-native-calendars"

export const Calendar = ({navigation}) => {
  const [items, setItems] = useState([])
  return (
    <View>
      <Agenda>
        items = {this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2023-12-24'}
        </Agenda>
    </View>
  );
};

export default Schedule; 
