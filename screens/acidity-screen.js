import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://www.chandigarhayurvedcentre.com/wp-content/uploads/2019/08/Acidity.jpg",
};

export default function AcidityScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} resizeMode="stretch" style={styles.image} />

      <View style={styles.remedies}>
        <Text style={styles.remed}>Remedies</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Remedy 1: Fennel Seeds</Text>
            {"\n"}
            Taking 1 tsp of fennel seeds after meals may reduce the risk of
            acidity. Fennel seeds help in digestion and in regulating acid
            production in the stomach. You can either chew fennel seeds with a
            pinch of sugar or take it with lukewarm water.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 2:Cumin Seeds</Text>
            {"\n"}
            Roasted cumin seeds taken with lukewarm water may help relieve
            acidity and its symptoms, such as heartburn, nausea, bloating, etc.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>
              {" "}
              Remedy 3:Watermelon juice
            </Text>
            {"\n"}
            Watermelon juice is not only good for digestion, but it can also
            help you feel at ease if you are suffering from acidity.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 4:Cloves</Text>
            {"\n"}
            It’s normal to experience acidity after overeating or consuming
            deep-fried food. Chewing a few stalks of clove after your meals can
            keep stomach acid secretion in check and improve the symptoms of
            acidity.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 5:Mint Leaves</Text>
            {"\n"}
            The cooling sensation of mint leaves can help you find temporary
            relief from heartburn and acid reflux. Mint Leaves also support
            digestion and control bad breath.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 6:Buttermilk</Text>
            {"\n"}
            Buttermilk may help neutralise acidity and soothe the burning
            sensation. For better results, add black pepper powder and
            coriander.
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
