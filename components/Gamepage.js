import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Modal
} from "react-native";
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Cell
} from "react-native-table-component";

export default class HomepageOuter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      modalVisible: false,
      rowIndex: 0,
      columnIndex: 0,
      players: props.route.params.players,
      letterBag: {
        Blank: { count: 2, value: 0 },
        A: { count: 9, value: 1 },
        B: { count: 2, value: 3 },
        C: { count: 2, value: 3 },
        D: { count: 4, value: 2 },
        E: { count: 12, value: 1 },
        F: { count: 2, value: 4 },
        G: { count: 3, value: 2 },
        H: { count: 2, value: 4 },
        I: { count: 9, value: 1 },
        J: { count: 1, value: 8 },
        K: { count: 1, value: 5 },
        L: { count: 4, value: 1 },
        M: { count: 2, value: 3 },
        N: { count: 6, value: 1 },
        O: { count: 8, value: 1 },
        P: { count: 2, value: 3 },
        Q: { count: 1, value: 10 },
        R: { count: 6, value: 1 },
        S: { count: 4, value: 1 },
        T: { count: 6, value: 1 },
        U: { count: 4, value: 1 },
        V: { count: 2, value: 4 },
        W: { count: 2, value: 4 },
        X: { count: 1, value: 8 },
        Y: { count: 2, value: 4 },
        Z: { count: 1, value: 10 }
      },
      playerHand1: ["1", "2", "3", "4", "5", "6", "7"],
      playerHand2: [],
      playerHand3: [],
      playerHand4: [],
      board: [
        ["a", "b", "c", "d", "", "", "", "", "", "", "", "", "", "", ""],
        ["h", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
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
              console.log("Modal has been closed.");
            }}
          >
            <View style={styles.modalOuter}>
              <View style={styles.modalInner}>
                {this.state.playerHand1.map((letter, letterIndex) => (
                  <TouchableOpacity
                    style={styles.modalLetter}
                    key={letterIndex}
                    onPress={() => {
                      if (
                        !this.state.board[this.state.rowIndex][
                          this.state.columnIndex
                        ]
                      ) {
                        const board = this.state.board;
                        const playerHand1 = this.state.playerHand1;
                        board[this.state.rowIndex][
                          this.state.columnIndex
                        ] = letter;
                        playerHand1[letterIndex] = "";
                        this.setState(() => ({
                          playerHand1: playerHand1,
                          board: board
                        }));
                      }
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
    );
  }
}

const widthArr = [
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100
];

const styles = StyleSheet.create({
  flexify: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 16,
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
  }
});
