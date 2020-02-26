import React from "react";
import { StyleSheet, Text, View, Picker, Button } from "react-native";

function Homepage(props) {
  if (!props.imageLoaded) {
    return null;
  }

  return (
    <View>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 100
        }}
      >
        <View>
          <Text style={styles.Title}>Scrabblicious</Text>
        </View>
        <View>
          <Button title="Start Playing" onPress={props.handleSubmit} />
        </View>
        <View style={styles.Text}>
          <Text style={styles.message}>Select Number of Players</Text>
        </View>
        <View style={styles.Pick}>
          <Picker
            selectedValue={props.players}
            style={{ height: 50, width: 100 }}
            onValueChange={props.handleValueChange}
          >
            <Picker.Item label="Two" value="2" />
            <Picker.Item label="Three" value="3" />
            <Picker.Item label="Four" value="4" />
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  message: {
    fontSize: 20,
    textAlign: "center"
  },
  submitPlayers: {},
  Title: {
    fontSize: 40
  },
  Pick: {}
});

export default Homepage;
