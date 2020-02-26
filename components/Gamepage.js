import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class HomepageOuter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      players: props.route.params.players
    };
  }

  static getDerivedStateFromError(error) {
    this.setState(error => ({ hasError: true }));
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>The frost is on the pumpkin.</h1>;
    }
    return (
      <View>
        <Text>{this.state.players}</Text>
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
