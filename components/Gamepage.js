import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  ImageBackground
} from "react-native";
import { Table, TableWrapper, Cell } from "react-native-table-component";
import backImg from "../images/Backboard.jpg";

export default class HomepageOuter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      modalVisible: false,
      passModalVisible: false,
      rowIndex: 0,
      columnIndex: 0,
      players: props.route.params.players,
      currentPlayer: 1,
      lastPlaced: [],
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
        [
          ["", "", "#f44e0db0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f44e0db0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f44e0db0"]
        ],
        [
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#0fa4deb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#0fa4deb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"]
        ],
        [
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"]
        ],
        [
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"]
        ],
        [
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"]
        ],
        [
          ["", "", "#ffffff00"],
          ["", "", "#0fa4deb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#0fa4deb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#0fa4deb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#0fa4deb0"],
          ["", "", "#ffffff00"]
        ],
        [
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"]
        ],
        [
          ["", "", "#f44e0db0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f44e0db0"]
        ],
        [
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"]
        ],
        [
          ["", "", "#ffffff00"],
          ["", "", "#0fa4deb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#0fa4deb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#0fa4deb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#0fa4deb0"],
          ["", "", "#ffffff00"]
        ],
        [
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"]
        ],
        [
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"]
        ],
        [
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"]
        ],
        [
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f9ada0b0"],
          ["", "", "#ffffff00"]
        ],
        [
          ["", "", "#f44e0db0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f44e0db0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#9bcadeb0"],
          ["", "", "#ffffff00"],
          ["", "", "#ffffff00"],
          ["", "", "#f44e0db0"]
        ]
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
        style={{
          backgroundColor: cellData[2],
          height: "100%",
          width: "100%",
          justifyContent: "center"
        }}
        activeOpacity={1}
        onPress={() => {
          this.setState(() => ({
            rowIndex: index,
            columnIndex: cellIndex,
            modalVisible: true
          }));
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{"  " + cellData[0]}</Text>
          <Text style={{ fontSize: 10 }}>{cellData[1] + "   "}</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={styles.flexify}>
        <ImageBackground
          source={backImg}
          style={styles.backgroundify}
          imageStyle={{ opacity: 0.3 }}
        >
          <ScrollView
            horizontal={true}
            directionalLockEnabled={true}
            style={styles.container}
          >
            <ScrollView bounces={false}>
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
            <View style={styles.bottomText}>
              <Text>
                Score:{" "}
                {this.state[`playerScore${this.state.currentPlayer}`] + "    "}
              </Text>
              <Text>Hand:</Text>
              <View style={{ flexDirection: "row" }}>
                {this.state[`playerHand${this.state.currentPlayer}`].map(
                  (tile, tileIndex) => (
                    <View key={tileIndex} style={{ flexDirection: "row" }}>
                      <Text style={{ fontWeight: "bold" }}>
                        {" " + tile[0]}
                      </Text>
                      <Text style={{ fontSize: 10 }}>{tile[1] + "   "}</Text>
                    </View>
                  )
                )}
              </View>
            </View>
            <Button
              title="Submit Word"
              onPress={() => {
                let score = this.state[
                  `playerScore${this.state.currentPlayer}`
                ];
                score += 5;
                this.setState(() => ({
                  [`playerScore${this.state.currentPlayer}`]: score,
                  passModalVisible: true
                }));
              }}
            />
          </View>
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
                {this.state[`playerHand${this.state.currentPlayer}`].map(
                  (letter, letterIndex) => (
                    <TouchableOpacity
                      style={styles.modalLetter}
                      key={letterIndex}
                      onPress={() => {
                        const board = this.state.board.slice();
                        let lastPlaced = [
                          this.state.rowIndex,
                          this.state.columnIndex
                        ];
                        let playerHand = this.state[
                          `playerHand${this.state.currentPlayer}`
                        ].slice();
                        board[this.state.rowIndex][this.state.columnIndex][0] =
                          letter[0];
                        board[this.state.rowIndex][this.state.columnIndex][1] =
                          letter[1];
                        playerHand.splice(letterIndex, 1);
                        this.setState(() => ({
                          [`playerHand${this.state.currentPlayer}`]: playerHand,
                          board: board,
                          lastPlaced: lastPlaced,
                          modalVisible: false
                        }));
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>{letter[0]}</Text>
                      <Text style={{ fontSize: 10 }}>{letter[1]}</Text>
                    </TouchableOpacity>
                  )
                )}
              </View>
            </View>
          </Modal>
          <Modal visible={this.state.passModalVisible}>
            <View style={styles.passModal}>
              <Button
                title="Take Turn"
                onPress={() => {
                  let newPlayerHand = letterGrabber(
                    this.state[`playerHand${this.state.currentPlayer}`]
                  );
                  this.setState(() => ({
                    [`playerHand${this.state.currentPlayer}`]: newPlayerHand,
                    passModalVisible: false,
                    currentPlayer:
                      this.state.currentPlayer === this.state.players
                        ? 1
                        : this.state.currentPlayer + 1
                  }));
                }}
              />
            </View>
          </Modal>
        </ImageBackground>
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
  modalOuter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000080"
  },
  modalInner: {
    width: 400,
    height: 50,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  modalLetter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 0
  },
  bottomBar: {
    backgroundColor: "#fff",
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomText: {
    textAlign: "center",
    flexDirection: "row"
  },
  passModal: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  backgroundify: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});
