import React, { Component } from "react";
import CardList from "./Components/CardList";
import { Dictionary } from "./Components/Dictionary";
import Header from "./Components/Header";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Dictionary: Dictionary,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredWords = this.state.Dictionary.filter(Dictionary => {
      return Dictionary.word
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="container">
        <h1>Urdu Diary</h1>
        <Header searchChange={this.onSearchChange} />
        <CardList Dictionary={filteredWords} />
      </div>
    );
  }
}

export default App;
