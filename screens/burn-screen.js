import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://i0.wp.com/urgentcaresouthaven.com/wp-content/uploads/2020/09/burn-care.jpeg?fit=2000%2C1403&ssl=1",
};

export default function BurnScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} resizeMode="stretch" style={styles.image} />

      <View style={styles.remedies}>
        <Text style={styles.remed}>Remedies</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Remedy 1:Aloe Vera-</Text>
            {"\n"} In Ayurveda treatment, aloe vera works wonders for any sort
            of skin injury, especially skin burns. Apply the pulp of Aloe Vera
            on the burn injury and the surrounding area. It will soothe the
            burnt skin without leaving dark patches or stains.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 2:Ghee-</Text>
            {"\n"} Ghee leaves your skin with a cooling sensation. Take barks of
            Bargad and Pipal trees, mash them into a pulp, add them to plain
            ghee and apply on the burnt area. Applying medicated ghee on the
            burns can help heal your injury faster.
            {"\n"}
            {"\n"}{" "}
            <Text style={{ fontWeight: "bold" }}>Remedy 3:Coconut oil-</Text>
            {"\n"} In Ayurveda, Coconut oil is effective for minor burn
            injuries. Applying coconut oil before stepping out in the sun
            prevents sunburn and suntan. You can add a few drops of honey to the
            coconut oil, and apply the mixture on your injury. Sesame oil can
            also be used as an alternative to coconut oil.
            {"\n"}
            {"\n"}{" "}
            <Text style={{ fontWeight: "bold" }}>
              Remedy 4:Sandalwood powder and turmeric-
            </Text>
            {"\n"} These have anti-inflammatory properties. Prepare a herbal
            pack using basic ingredients like powdered sandalwood, turmeric,
            amla, etc. These ayurvedic powder possess anti-inflammatory,
            antibacterial properties that heal burn scars, and eases pain. You
            can also pour in some rose water/milk to the pack to witness better
            results.
            {"\n"}
            {"\n"} <Text style={{ fontWeight: "bold" }}>Remedy 5:Cucumber</Text>
            -{"\n"} Cucumber contains nutrients and vitamins that help in the
            healing of wounds. These are used to cure various skin ailments,
            including burn injuries. Extract the juice out of cucumber slices.
            Apply the juice on the affected area, and leave it on for a few
            minutes. You will soon feel a cooling sensation on the burn site.
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
