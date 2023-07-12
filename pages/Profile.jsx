import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileInformation}>
          <Text style={{fontWeight: "bold", fontSize: "30"}}>Kaley Kwan</Text>
          <Text>(650) 680-5243</Text>
        </View>
        <View style={styles.editProfileButton}>
          <Button
            title="Edit Profile"
            onPress={() => console.log(item.eventName)}
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 100,
  },
  profileHeader: {
    gap: 10
  },
  profileInformation: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },
  editProfileButton: {
    backgroundColor: "#F97DA3",
    borderColor: "#F97DA3",
    borderWidth: 5,
    borderRadius: 15,
    width: 250,
  }
});
