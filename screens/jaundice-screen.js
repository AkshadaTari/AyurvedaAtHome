import * as React from "react";
import { View,Text,StyleSheet,Image,ScrollView,} from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://www.planetayurveda.com/pa-wp-images/jaundice.jpg",
};

export default function JaundiceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} resizeMode="stretch" style={styles.image} />

      <View style={styles.remedies}>
        <Text style={styles.remed}>Remedies</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
          <Text style={{fontWeight: "bold"}}>Remedy 1:Aloevera</Text>
            {"\n"}• It can be consumed in the form of juice or its pulp can be taken with water.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  remedies: {
    flex: 3,
    alignItems: "center",
    fontSize: 20,
  },
  scrollView: {
    backgroundColor: "darkseagreen",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
  remed: {
    alignItems: "center",
    fontSize: 30,
    color: 'olive'
  },
});
