import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://www.newlifenutrition.com.au/wp-content/uploads/AdobeStock_207132330-scaled.jpeg ",
};

export default function ConstipationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} resizeMode="stretch" style={styles.image} />

      <View style={styles.remedies}>
        <Text style={styles.remed}>Remedies</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Remedy 1:Coconut Oil</Text>
            {"\n"}
            Taking a spoon or two of coconut oil every day can help lubricate
            your intestines to ease bowel movements.
            {"\n"}
            {"\n"} <Text style={{ fontWeight: "bold" }}>Remedy 2:Figs</Text>
            {"\n"}
            Also known as Anjeer, figs are an excellent laxative with their
            high-fibre content. When consumed after being soaked in warm water,
            figs can improve digestion and prevent constipation.
            {"\n"}
            {"\n"}{" "}
            <Text style={{ fontWeight: "bold" }}>Remedy 3:Ghee{"\n"}</Text>
            Try adding ghee to your diet to help as it is a natural laxative
            that helps cleanse your colon. Warm about 200 ml water and add a
            tablespoon of ghee to it. Drink this first thing in the morning to
            help ease your constipation.
            {"\n"}
            {"\n"}{" "}
            <Text style={{ fontWeight: "bold" }}>Remedy 4:Ginger Tea</Text>
            {"\n"}
            Ginger tea is a staple beverage loved across Indian households.
            Drinking ginger tea in the morning induces bowel movement and treats
            constipation.
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
    color: "olive",
  },
});
