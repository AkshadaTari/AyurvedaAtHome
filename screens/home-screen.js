import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const Space = () => <View style={{ marginVertical: 10 }} />;
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={require('../assets/Home.jpg')} resizeMode="cover" style={styles.image}>
        <View style={{ marginVertical: 5 }} />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Cold")}
        >
          <Text style={styles.text}>COLD</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Fever")}
        >
          <Text style={styles.text}>FEVER</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Dengue")}
        >
          <Text style={styles.text}>DENGUE</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("DogBite")}
        >
          <Text style={styles.text}>DOG BITE</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Burn")}
        >
          <Text style={styles.text}>BURN</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Acidity")}
        >
          <Text style={styles.text}>ACIDITY</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("HeatStroke")}
        >
          <Text style={styles.text}>HEAT STROKE</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Constipation")}
        >
          <Text style={styles.text}>CONSTIPATION</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("HoneyBeeBite")}
        >
          <Text style={styles.text}>HONEYBEE BITE</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("LooseMotion")}
        >
          <Text style={styles.text}>LOOSE MOTION</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Cut")}
        >
          <Text style={styles.text}>CUT</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Jaundice")}
        >
          <Text style={styles.text}>JAUNDICE</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "transparent",
    opacity: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
