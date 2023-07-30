import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import {Agenda} from "react-native-calendars"
import {Card, Avatar} from 'react-native-paper';

const timeString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

export const Calendar = ({navigation}) => {
  const [items, setItems] = useState({})
  
  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 *1000; 
        const strTime = timeString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1); 
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' # ' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });

      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{'Dinner with Kaley'}</Text>
              <Avatar.Text label="K" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items = {items}
        loadItemsForMonth = {loadItems}
        selected = { '2023-12-24'}
        renderItem={renderItem}
        />
    </View>
  );
};