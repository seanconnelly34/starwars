import React, { Component } from "react";
import Planet from "./Planet";
import axios from "axios";

class Planets extends Component {
  constructor() {
    super();

    this.state = {
      planets: []
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/planets/").then(res => {
      const planets = res.data.results;
      this.setState({ planets: planets });
    });
  }

  render() {
    return (
      <div>
        {this.state.planets &&
          this.state.planets.map((planet, index) => (
            <Planet key={index} planetInfo={planet} />
          ))}
      </div>
    );
  }
}

export default Planets;
