import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://media.istockphoto.com/id/499204926/photo/mosquito-sucking-blood.jpg?s=612x612&w=0&k=20&c=FAOUhbHCq1OYJeZvhANryY26Zu0W9G_ZqqsAdbfODh4=",
};

export default function DengueScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} resizeMode="stretch" style={styles.image} />

      <View style={styles.remedies}>
        <Text style={styles.remed}>Remedies</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Remedy 1:Methi seeds</Text>
            {"\n"} Methi leaves are useful in reducing elevated body temperature
            and decrease muscle pain. They promote sleep and allow the body to
            rest and heal. Methi seeds also can be used. Just soak overnight and
            have on an empty stomach in the morning.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 2: Papaya leaves</Text>
            {"\n"}Papaya leaves are beneficial if you want to increase your
            platelet count. In dengue fever, the platelet count decreases and
            can lead to complications. They are rich in vitamin C and
            antioxidants that reduce stress on the body. They also reduce other
            symptoms like chills, body ache nausea, and fatigue. Crush the leave
            and take out the juice. About two tablespoons should be had daily.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 3: Turmeric</Text>
            {"\n"}Turmeric is an important spice to heal the body. It is
            antiseptic, antimicrobial, and anti-inflammatory. It boosts
            metabolism and initiates inner healing. Consume a pinch of turmeric
            in your milk for the best results
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 4:Tulsi Leaves</Text>
            {"\n"}Tulsi or the holy basil is almost a wonder herb if you want to
            increase your immunity. Boil tulsi leaves with some black pepper and
            has it daily. This will fight off infections and build up immunity.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 5: Neem Leaves</Text>
            {"\n"} Neem leaves serve many purposes. Boil water and let neem
            leaves seep in it for some time. Drinking this water increases the
            blood platelet and white blood cell count. Having neem water
            concoction increases immunity and strengthens the body. Also, by
            burning the dried leaves, you can ward off mosquitoes in your
            vicinity.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Remedy 6: Orange Juice</Text>
            {"\n"} Citrus fruits are very beneficial when suffering from dengue
            fever. Vitamin C present in these fruits, especially organs and
            orange juice, helps improve immunity, detoxifies the body, initiates
            cell repair, and combats infections.
            {"\n"}
            {"\n"}
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
    color: "olive",
  },
});
