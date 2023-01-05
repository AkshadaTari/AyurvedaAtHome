import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://www.tanner.org/upload/blogs/385/images/man-heatstroke-784x488_202107142108278350.jpg",
};

export default function HeatStrokeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} resizeMode="stretch" style={styles.image} />

      <View style={styles.remedies}>
        <Text style={styles.remed}>Remedies</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Remedy 1:Onion Juice</Text>
            {"\n"}Applying onion juice behind the ears and on your chest can
            help bring down your body temperature
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 2: Tamarind Juice</Text>
            {"\n"} Soak some tamarind in boiling water. Strain it and drink it
            with a pinch of sugar. This decoction lowers your body temperature.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 3: Aam Panna</Text>
            {"\n"}Aam Panna refreshing drink that doubles up as a health tonic.
            It is made with raw mangoes and spices that cool your body. This
            drink should be consumed at least two to three times in a day. ““Aam
            panna is enriched with cooling spices like cumin, fennel, pepper and
            kala namak which provides both energy and electrolytes,
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
