import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SectionList } from "react-native";

export default function App() {
  const DATA = [
    {
      title: "July 12",
      data: [
        {
          eventName: "lunch with Anika",
          eventTime: "1:30 pm",
          eventLocation: "696 Benvenue Avenue",
        },
        {
          eventName: "wine party",
          eventTime: "10:30 pm",
          eventLocation: "487 El Monte Avenue",
        },
      ],
    },
    {
      title: "Aug 14",
      data: [
        {
          eventName: "picnic",
          eventTime: "2:30 pm",
          eventLocation: "Cuesta Park",
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SectionList
        style={styles.eventList}
        showsVerticalScrollIndicator={false}
        sections={DATA}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <View style={styles.eventCardHeader}>
              <Text style={{ color: "white" }}>{item.eventName}</Text>
            </View>
            <View style={styles.eventCardInfo}>
              <View style={styles.eventCardProfiles}>
                <Text style={{ color: "white" }}>profile pics</Text>
              </View>
              <View style={styles.eventCardLogistics}>
                <Text style={{ color: "white" }}>{item.eventTime}</Text>
                <Text style={{ color: "white" }}>{item.eventLocation}</Text>
              </View>
            </View>
            <View style={styles.cancelButton}>
              <Button
                title="CANCEL"
                onPress={() => console.log("button pressed")}
                color="#fff"
              />
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.eventCardDate}>
            <Text style={{color: "white"}}>{title}</Text>
          </View>
        )}
      />
    </View>
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
