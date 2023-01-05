import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://post.healthline.com/wp-content/uploads/2020/09/1200x628_FACEBOOK_Home_Remedies_for_Bee_Stings_What_Works-1200x628.jpg",
};

export default function HoneyBeeBiteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} resizeMode="stretch" style={styles.image} />

      <View style={styles.remedies}>
        <Text style={styles.remed}>Remedies</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Remedy 1:Baking Soda</Text>
            {"\n"}
            mix baking soda with water, and apply the paste on the affected
            area.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 2:Honey</Text>
            {"\n"}
            apply a small amount of honey to the affected area, cover the sting
            with a loose bandage, and leave the bandage on for up to an hour.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 3:Toothpaste</Text>
            {"\n"}
            just dab a bit of Toothpaste on the affected area.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 4:Ice</Text>
            {"\n"}
            Apply ice on the affected area.
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
