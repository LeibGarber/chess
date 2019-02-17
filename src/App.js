import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const boardSize = 8;
const pieces = [
  ["R", "P", "", "", "", "", "p", "r"],
  ["N", "P", "", "", "", "", "p", "n"],
  ["B", "P", "", "", "", "", "p", "b"],
  ["K", "P", "", "", "", "", "p", "k"],
  ["Q", "P", "", "", "", "", "p", "q"],
  ["B", "P", "", "", "", "", "p", "b"],
  ["N", "P", "", "", "", "", "p", "n"],
  ["R", "P", "", "", "", "", "p", "r"]
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>This shit is chess not checkers</h2>
          <h3>-Omar</h3>
        </div>
        <div className="board">
          {Array(boardSize)
            .fill(0)
            .map((_, rowIndex) => (
              <div className="row" key={rowIndex}>
                {Array(boardSize)
                  .fill(0)
                  .map((__, colIndex) => (
                    <div className="square" key={colIndex}>
                      {pieces[colIndex][rowIndex]}&nbsp;
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
