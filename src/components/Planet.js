import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Planet extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    const planetInfo = this.props.planetInfo;
    return (
      <div className="row p-0">
        <div className="col-12">
          <table className="planets-table">
            <tr>
              <td>{planetInfo.name}</td>
              <td>{planetInfo.rotation_period}</td>
              <td>{planetInfo.orbital_period}</td>
              <td>{planetInfo.diameter}</td>
              <td>{planetInfo.climate}</td>
              <td>{planetInfo.gravity}</td>
              <td>{planetInfo.terrain}</td>
              <td>{planetInfo.surface_water}</td>
              <td>{planetInfo.population}</td>
            </tr>
          </table>

          <hr />
        </div>
      </div>
    );
  }
}

export default Planet;
