import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home-screen";
import ColdScreen from "./screens/cold-screen";
import FeverScreen from "./screens/fever-screen";
import DengueScreen from "./screens/dengue-screen";
import DogBiteScreen from "./screens/dogbite-screen";
import BurnScreen from "./screens/burn-screen";
import AcidityScreen from "./screens/acidity-screen";
import HeatStrokeScreen from "./screens/heatstroke-screen";
import ConstipationScreen from "./screens/constipation-screen";
import HoneyBeeBiteScreen from "./screens/honeybeebite-screen";
import LoosemotionScreen from "./screens/loosemotion-screen";
import CutScreen from "./screens/cut-screen";
import JaundiceScreen from "./screens/jaundice-screen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // https://reactnavigation.org/docs/native-stack-navigator#headertransparent
          headerTransparent: true,
          headerTitleStyle: {
            color: "#fff",
          },
          //headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Ayurveda At Home",
          }}
        />
        <Stack.Screen name="Cold" component={ColdScreen} />
        <Stack.Screen name="Fever" component={FeverScreen} />
        <Stack.Screen name="Dengue" component={DengueScreen} />
        <Stack.Screen name="DogBite" component={DogBiteScreen} />
        <Stack.Screen name="Burn" component={BurnScreen} />
        <Stack.Screen name="Acidity" component={AcidityScreen} />
        <Stack.Screen name="HeatStroke" component={HeatStrokeScreen} />
        <Stack.Screen name="Constipation" component={ConstipationScreen} />
        <Stack.Screen name="HoneyBeeBite" component={HoneyBeeBiteScreen} />
        <Stack.Screen name="LooseMotion" component={LoosemotionScreen} />
        <Stack.Screen name="Cut" component={CutScreen} />
        <Stack.Screen name="Jaundice" component={JaundiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
