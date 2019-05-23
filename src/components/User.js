import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      planet: ""
    };
  }

  componentDidMount() {
    const homeworld = this.props.userInfo.homeworld;
    axios.get(homeworld).then(res => {
      this.setState({
        planet: res.data.name,
        url: res.data.url
      });
    });
  }

  render() {
    const userInfo = this.props.userInfo;
    console.log("ships", this.props.userInfo.starships);
    return (
      <div className="row p-0">
        <div className="col-12">
          <table>
            <tr>
              <td>
                <Link
                  to={{
                    pathname: `Users/${userInfo.name}`,
                    state: {
                      url: this.props.userInfo.url,
                      planet: this.state.planet,
                      films: this.props.userInfo.films,
                      vehicles: this.props.userInfo.vehicles,
                      ships: this.props.userInfo.starships,
                      species: this.props.userInfo.species
                    }
                  }}
                >
                  {userInfo.name}
                </Link>
              </td>
              <td>{userInfo.gender}</td>
              <td>{userInfo.eye_color}</td>
              <td>{userInfo.hair_color}</td>
              <td>{userInfo.skin_color}</td>
              <td>{userInfo.height}</td>
              <td>{userInfo.birth_year}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default User;
