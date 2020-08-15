import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");

    const { advice } = response.data.slip;

    this.setState({ advice });
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchApi}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
