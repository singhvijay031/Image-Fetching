import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "",
    };
  }

  fetchImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.message);
        this.setState({
          imageURL: data.message,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="imageContainer">
          {this.state.imageURL && <img src={this.state.imageURL} alt="Dog" />}
        </div>
        <button className="fetchButton" onClick={this.fetchImage}>
          Fetch Image
        </button>
      </div>
    );
  }
}

export default App;
