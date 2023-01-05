import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1647514789/BW%20BLOG/Untitled-design---2022-03-17T162941.855_11zon.jpg",
};

export default function LoosemotionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} resizeMode="stretch" style={styles.image} />

      <View style={styles.remedies}>
        <Text style={styles.remed}>Remedies</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Remedy 1:Salt-Sugar Water</Text>
            {"\n"}A homemade oral rehydration solution of 5-6 teaspoons of salt
            and sugar, each in a litre of water can be sipped throughout the day
            to treat the dehydration and help with fatigue and weakness.
            {"\n"}
            {"\n"}{" "}
            <Text style={{ fontWeight: "bold" }}>Remedy 2:Lemon Juice</Text>
            {"\n"}
            Lemon juice can be combined with water and a pinch of salt,
            coriander powder, and mint. {"\n"}
            {"\n"}{" "}
            <Text style={{ fontWeight: "bold" }}>Remedy 3:Pomegranate</Text>
            {"\n"}
            Pomegranates have anti-inflammatory properties and are among the
            most effective home remedies for an upset stomach and loose motions.{" "}
            {"\n"}
            {"\n"} <Text style={{ fontWeight: "bold" }}>Remedy 4:Yoghurt</Text>
            {"\n"}
            Yoghurt is one of the best home remedies for loose motions. It is
            rich in probiotics, which are living microorganisms that promote
            good gut health and can help prevent diarrhoea as well.
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
