// import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomepageOuter from "./components/HomepageOuter";
import Homepage from "./components/Homepage";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React, { Component } from "react";
// import { StyleSheet, View, ImageBackground } from "react-native";
// import Homepage from "./components/Homepage";
// import img from "./images/MediumPile.jpg";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hasError: false,
//       players: 2,
//       imageLoaded: false
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleValueChange = this.handleValueChange.bind(this);
//     this.handleImageLoaded = this.handleImageLoaded.bind(this);
//   }

//   static getDerivedStateFromError(error) {
//     this.setState(error => ({ hasError: true }));
//   }

//   componentDidCatch(error, errorInfo) {
//     logErrorToMyService(error, errorInfo);
//   }

//   handleImageLoaded() {
//     this.setState(() => ({ imageLoaded: true }));
//   }

//   handleValueChange(itemValue, itemIndex) {
//     this.setState(() => ({ players: itemValue }));
//   }

//   handleSubmit() {
//     console.log(this.state.players);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>The frost is on the pumpkin.</h1>;
//     }
//     return (
//       <View style={styles.flexify}>
//         <ImageBackground
//           source={img}
//           style={styles.backgroundify}
//           imageStyle={{ opacity: 0.3 }}
//           onLoad={this.handleImageLoaded}
//         >
//           <Homepage
//             imageLoaded={this.state.imageLoaded}
//             players={this.state.players}
//             handleValueChange={this.handleValueChange}
//             handleSubmit={this.handleSubmit}
//           />
//         </ImageBackground>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   flexify: {
//     flex: 1
//   },
//   backgroundify: {
//     flex: 1,
//     width: "100%",
//     height: "100%"
//   }
// });
