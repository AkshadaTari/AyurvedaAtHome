import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://goto.hsi.com/hubfs/shutterstock_662031211.jpg",
};

export default function DogBiteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} resizeMode="stretch" style={styles.image} />

      <View style={styles.remedies}>
        <Text style={styles.remed}>Remedies</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>
              Remedy 1:Neem and turmeric paste
            </Text>
            {"\n"}Just blend neem leaves and turmeric and make a smooth paste.
            Apply it on the bitten part of the skin.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>
              {" "}
              Remedy 2: Wash it with soap and water
            </Text>
            {"\n"}Keeping any injury clean should be your first priority.
            Instant response after a dog bite should be washing it with soap and
            water. This will keep it hygienically safe and reduce the risk of
            infections
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 3:Garlic</Text>
            {"\n"}Just blend the garlic and add some coconut oil to it. Then,
            apply it on the dog bite wound
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 4: Lemon juice</Text>
            {"\n"}You can apply lemon juice on the wound for quick healing and
            to avoid infection. It might sting for a while but will get better
            very soon.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 5:Cumin seeds </Text>
            {"\n"}Take a few cumin seeds and mix it with water. Make a paste of
            it and apply it on the affected area.
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
