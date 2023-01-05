import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://t3.ftcdn.net/jpg/01/41/23/84/360_F_141238458_0edCKGFveAffKSVhEaNg8u0XX4tdaTbQ.jpg",
};

export default function FeverScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} resizeMode="stretch" style={styles.image} />

      <View style={styles.remedies}>
        <Text style={styles.remed}>Remedies</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
          <Text style={{fontWeight: "bold"}}>Remedy 1:Tulsi</Text>
           {"\n"}Take 20 Basil leaves and boil them, Add 1
            teaspoon of crushed ginger in the strained tulsi water, boil until
            the solution gets reduced to half. Add a little honey and drink this
            tea two or three times a day for three days.
            {"\n"}
            {"\n"}
            <Text style={{fontWeight: "bold"}}>Remedy 2: Ginger</Text>
            {"\n"}Take 2 cups of water and two tablespoons of
            honey. Grate ginger(2 inch) into tiny pieces. Add the grated ginger
            in the solution and boil for ten minutes
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
    marginHorizontal: 10,
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
