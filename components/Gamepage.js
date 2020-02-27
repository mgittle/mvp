import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Modal,
  Button
} from "react-native";
import { Table, TableWrapper, Cell } from "react-native-table-component";

export default class HomepageOuter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      modalVisible: false,
      rowIndex: 0,
      columnIndex: 0,
      players: props.route.params.players,
      letterBag: shuffle(letterArray),
      playerHand1: letterGrabber([]),
      playerScore1: 0,
      playerHand2: letterGrabber([]),
      playerScore2: 0,
      playerHand3: letterGrabber([]),
      playerScore3: 0,
      playerHand4: letterGrabber([]),
      playerScore4: 0,
      board: [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
      ]
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

    const cellElement = (index, cellIndex, cellData) => (
      <TouchableOpacity
        onPress={() => {
          this.setState(() => ({
            rowIndex: index,
            columnIndex: cellIndex,
            modalVisible: true
          }));
        }}
      >
        <View>
          <Text style={styles.btnText}>{cellData}</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={styles.flexify}>
        <ScrollView
          horizontal={true}
          directionalLockEnabled={true}
          style={styles.container}
        >
          <ScrollView bounces={false}>
            <Modal
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setState(() => ({
                  modalVisible: false
                }));
              }}
            >
              <View style={styles.modalOuter}>
                <View style={styles.modalInner}>
                  {this.state.playerHand1.map((letter, letterIndex) => (
                    <TouchableOpacity
                      style={styles.modalLetter}
                      key={letterIndex}
                      onPress={() => {
                        const board = this.state.board.slice();
                        let playerHand1 = this.state.playerHand1.slice();
                        board[this.state.rowIndex][
                          this.state.columnIndex
                        ] = letter;
                        playerHand1.splice(letterIndex, 1);
                        // playerHand1 = letterGrabber(playerHand1);
                        this.setState(() => ({
                          playerHand1: playerHand1,
                          board: board,
                          modalVisible: false
                        }));
                      }}
                    >
                      <Text>{letter}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </Modal>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#000" }}>
              {this.state.board.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={cellElement(index, cellIndex, cellData)}
                      textStyle={styles.text}
                      width={50}
                      height={50}
                    />
                  ))}
                </TableWrapper>
              ))}
            </Table>
          </ScrollView>
        </ScrollView>
        <View style={styles.bottomBar}>
          <Text>Score: {this.state.playerScore1}</Text>
          <Text>Hand: {this.state.playerHand1}</Text>
          <Button
            title="Submit Word"
            onPress={() => {
              let score = this.state.playerScore1;
              score += 5;
              this.setState(() => ({
                playerScore1: score
              }));
            }}
          />
        </View>
      </View>
    );
  }
}

const shuffle = function(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const letterGrabber = function(playerHand) {
  const handArray = playerHand.slice();
  while (handArray.length < 7) {
    handArray.push(letterArray.shift());
  }

  return handArray;
};

const letterArray = [
  ["Blank", 0],
  ["Blank", 0],
  ["A", 1],
  ["A", 1],
  ["A", 1],
  ["A", 1],
  ["A", 1],
  ["A", 1],
  ["A", 1],
  ["A", 1],
  ["A", 1],
  ["B", 3],
  ["B", 3],
  ["C", 3],
  ["C", 3],
  ["D", 2],
  ["D", 2],
  ["D", 2],
  ["D", 2],
  ["E", 1],
  ["E", 1],
  ["E", 1],
  ["E", 1],
  ["E", 1],
  ["E", 1],
  ["E", 1],
  ["E", 1],
  ["E", 1],
  ["E", 1],
  ["E", 1],
  ["E", 1],
  ["F", 4],
  ["F", 4],
  ["G", 2],
  ["G", 2],
  ["G", 2],
  ["H", 4],
  ["H", 4],
  ["I", 1],
  ["I", 1],
  ["I", 1],
  ["I", 1],
  ["I", 1],
  ["I", 1],
  ["I", 1],
  ["I", 1],
  ["I", 1],
  ["J", 8],
  ["K", 5],
  ["L", 1],
  ["L", 1],
  ["L", 1],
  ["L", 1],
  ["M", 3],
  ["M", 3],
  ["N", 1],
  ["N", 1],
  ["N", 1],
  ["N", 1],
  ["N", 1],
  ["N", 1],
  ["O", 1],
  ["O", 1],
  ["O", 1],
  ["O", 1],
  ["O", 1],
  ["O", 1],
  ["O", 1],
  ["O", 1],
  ["P", 3],
  ["P", 3],
  ["Q", 10],
  ["R", 1],
  ["R", 1],
  ["R", 1],
  ["R", 1],
  ["R", 1],
  ["R", 1],
  ["S", 1],
  ["S", 1],
  ["S", 1],
  ["S", 1],
  ["T", 1],
  ["T", 1],
  ["T", 1],
  ["T", 1],
  ["T", 1],
  ["T", 1],
  ["U", 1],
  ["U", 1],
  ["U", 1],
  ["U", 1],
  ["V", 4],
  ["V", 4],
  ["W", 4],
  ["W", 4],
  ["X", 8],
  ["Y", 4],
  ["Y", 4],
  ["Z", 10]
];

const styles = StyleSheet.create({
  flexify: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 30
  },
  backgroundify: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  text: { fontSize: 40, margin: 5, textAlign: "center" },
  row: {
    flexDirection: "row"
  },
  btnText: {
    textAlign: "center"
  },
  modalOuter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000080"
  },
  modalInner: {
    width: 300,
    height: 300,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  modalLetter: {
    flex: 1
  },
  bottomBar: {
    backgroundColor: "#00000080",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomText: {
    textAlign: "center"
  }
});
