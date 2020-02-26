// import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomepageOuter from "./components/HomepageOuter";
import Gamepage from "./components/Gamepage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomepageOuter}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Scrabblicious" component={Gamepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
