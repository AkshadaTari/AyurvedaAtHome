import * as React from "react";
import { View,Text,StyleSheet,Image,ScrollView,} from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202011/cold_pixabay_1200x768.png?size=1200:675",
};

export default function ColdScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} resizeMode="stretch" style={styles.image} />

      <View style={styles.remedies}>
        <Text style={styles.remed}>Remedies</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            <Text style={{fontWeight: "bold"}}>Remedy 1:To increase immunity</Text>
            {"\n"}• ¼ teaspoon turmeric power • 2 teaspoons fresh ginger • 1
            cinnamon stick • 5 tulsi leaves • 1 cardamon • 1 clove • 1 Lemon
            grass • Combine all the ingredients in 1 cup of hot water of your
            choice. • Mix it well and drink.
            {"\n"}
            {"\n"}
            <Text style={{fontWeight: "bold"}}>Remedy 2: To keep nasal passage moist</Text>
            {"\n"}• Take steam of hot water( thrice a day) • Drink lots of fluid
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
