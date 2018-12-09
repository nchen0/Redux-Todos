import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
