import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Homepage from "./Homepage";
import img from "../images/MediumPile.jpg";

export default class HomepageOuter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      players: 2,
      imageLoaded: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  static getDerivedStateFromError(error) {
    this.setState(error => ({ hasError: true }));
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  handleImageLoaded() {
    this.setState(() => ({ imageLoaded: true }));
  }

  handleValueChange(itemValue, itemIndex) {
    this.setState(() => ({ players: itemValue }));
  }

  handleSubmit() {
    this.props.navigation.navigate("Scrabblicious", {
      players: this.state.players
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>The frost is on the pumpkin.</h1>;
    }
    return (
      <View style={styles.flexify}>
        <ImageBackground
          source={img}
          style={styles.backgroundify}
          imageStyle={{ opacity: 0.3 }}
          onLoad={this.handleImageLoaded}
        >
          <Homepage
            imageLoaded={this.state.imageLoaded}
            players={this.state.players}
            handleValueChange={this.handleValueChange}
            handleSubmit={this.handleSubmit}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexify: {
    flex: 1
  },
  backgroundify: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});
