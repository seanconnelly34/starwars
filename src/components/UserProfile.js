import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setFavorites, removeFave } from "../actions";

import {
  ProfileWrapper,
  ProfileDescription,
  ProfileFilms,
  ProfileVehicles,
  ProfileShips
} from "../styles/profile_styles.js";

import bargs from "../img/characters/bargs.jpeg";
import beru from "../img/characters/beru.jpg";
import c3po from "../img/characters/c3po.jpeg";
import darth from "../img/characters/darth.jpg";
import luke from "../img/characters/luke.jpeg";
import obi from "../img/characters/obi.jpeg";
import owen from "../img/characters/owen.jpeg";
import princess from "../img/characters/princess.jpg";
import r from "../img/characters/r.jpg";
import r2d2 from "../img/characters/r2d2.jpg";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.match.params.name,
      allInfo: [],
      filmNames: [],
      vehicleNames: [],
      shipNames: [],
      species: "",
      favorited: false,
      match: ""
    };
    this.favorite = this.favorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  componentDidMount() {
    const { url } = this.props.location.state;
    axios.get(url).then(res => {
      this.setState({ allInfo: res.data });
    });
    this.getFilms();
    this.getSpecies();
    this.getShips();
    this.getVehicles();
  }

  getProfilePic(name) {
    if (name === "Luke Skywalker") {
      return luke;
    }
    if (name === "C-3PO") {
      return c3po;
    }
    if (name === "R2-D2") {
      return r2d2;
    }
    if (name === "Darth Vader") {
      return darth;
    }
    if (name === "Leia Organa") {
      return princess;
    }
    if (name === "Owen Lars") {
      return owen;
    }
    if (name === "Beru Whitesun lars") {
      return beru;
    }
    if (name === "R5-D4") {
      return r;
    }
    if (name === "Biggs Darklighter") {
      return bargs;
    }
    if (name === "Obi-Wan Kenobi") {
      return obi;
    }
  }
  // async getFilms() {
  //   const { films } = this.props.location.state;
  //   const filmNames = [];
  //   films.map(film =>
  //     axios.get(film).then(res => {
  //       filmNames.push(res.data.title);
  //     })
  //   );
  //   let res = await axios.all(filmNames);
  //   this.setState({ filmName: res });
  // }

  // async getFilms() {
  //   const { films } = this.props.location.state;
  //   var promises = [];
  //   var filmNames = [];
  //   films.forEach(function(ele) {
  //     let url = ele;
  //     promises.push(axios.get(url));
  //   });
  //   console.log("promises", promises);
  //
  //   axios.all(promises).then(function(results) {
  //     results.forEach(function(response) {
  //       filmNames.push(response.data.title);
  //     });
  //   });
  //
  //   var isArr = Object.prototype.toString.call(filmNames) == "[object Array]";
  //   this.setState({ filmNames: filmNames });
  //   console.log("all film INFO", isArr);
  //   console.log("all film INFO", typeof filmNames);
  // }

  async getFilms() {
    const { films } = this.props.location.state;
    const promises = films.map(url => axios.get(url));

    const results = await axios.all(promises);
    const filmNames = results.map(result => result.data.title);
    this.setState({ filmNames });
  }

  async getSpecies() {
    const { species } = this.props.location.state;
    axios.get(species).then(res => {
      this.setState({ species: res.data.name });
    });
  }

  async getVehicles() {
    const { vehicles } = this.props.location.state;
    if (vehicles === undefined || vehicles.length === 0) {
    } else {
      const promises = vehicles.map(url => axios.get(url));
      const results = await axios.all(promises);
      const vehicleNames = results.map(result => result.data.name);
      this.setState({ vehicleNames });
    }
  }

  async getShips() {
    const { ships } = this.props.location.state;
    if (ships === undefined || ships.length === 0) {
    } else {
      const promises = ships.map(url => axios.get(url));
      const results = await axios.all(promises);
      const shipNames = results.map(result => result.data.name);
      this.setState({ shipNames });
    }
  }

  favorite() {
    const faves = this.state.allInfo;
    this.props.setFavorites(faves);
    this.setState({ favorited: true });
  }

  removeFavorite() {
    const unFave = this.state.allInfo.name;
    this.props.removeFave(unFave);
    this.setState({ favorited: false });
  }

  // removeFavorite() {
  //   const storeFaves = this.props.favorites;
  //   console.log("storefaves", storeFaves);
  //   const username = this.state.allInfo.name;
  //   const newFaves = storeFaves.filter(function(obj) {
  //     return obj.name !== username;
  //   });
  //   console.log("NEWfaves", newFaves);
  //   this.props.setFavorites(newFaves);
  // }

  render() {
    const { planet } = this.props.location.state;
    const { ships } = this.props.location.state;
    const { vehicles } = this.props.location.state;

    let match = false;

    if (!this.state.favorited) {
      match = false;
    } else {
      match = true;
    }

    console.log("match", match);

    return (
      <ProfileWrapper>
        <div className="row p-0">
          <div className="col-6">
            <Link to="/Users">Back</Link>
            <h1>{this.state.name}</h1>
          </div>
          <div className="col-6 text-right">
            {!this.state.favorite && match === false ? (
              <p onClick={this.favorite}>
                <i class="far fa-heart" />
              </p>
            ) : (
              <p>
                <i onClick={this.removeFavorite} class="fas fa-heart liked" />
              </p>
            )}
          </div>

          <div className="col-3">
            <img
              className="profile-pic"
              alt={this.getProfilePic(this.state.name)}
              src={this.getProfilePic(this.state.name)}
            />
          </div>

          <div className="col-9 mb-70">
            <ProfileDescription>
              <h3>Description</h3>

              <div className="row desc">
                <div className="col-4">
                  <p>
                    <span>
                      <i class="fas fa-globe-americas" />
                      Home Planet:
                    </span>
                    {planet}
                  </p>

                  <p>
                    <span>
                      <i class="fas fa-globe" />
                      Species:
                    </span>{" "}
                    {this.state.species}
                  </p>
                  <p>
                    <span>
                      <i class="fas fa-transgender-alt" /> Gender:
                    </span>
                    {this.state.allInfo.gender}
                  </p>
                </div>

                <div className="col-4">
                  <p>
                    <span>
                      <i class="fas fa-weight-hanging" />
                      Mass:
                    </span>{" "}
                    {this.state.allInfo.mass}
                  </p>
                  <p>
                    <span>
                      <i class="fas fa-user-alt" /> Hair:
                    </span>{" "}
                    {this.state.allInfo.hair_color}
                  </p>
                  <p>
                    <span>
                      <i class="fas fa-eye" />
                      Eyes:
                    </span>{" "}
                    {this.state.allInfo.eye_color}
                  </p>
                </div>
                <div className="col-4">
                  <p>
                    <span>
                      <i class="fas fa-birthday-cake" />
                      Birth:
                    </span>{" "}
                    {this.state.allInfo.birth_year}
                  </p>
                  <p>
                    <span>
                      <i class="fas fa-arrows-alt-v" /> Height:
                    </span>{" "}
                    {this.state.allInfo.height}
                  </p>
                </div>
              </div>
            </ProfileDescription>
          </div>

          <div className="col-4">
            <ProfileFilms>
              <div className="row">
                <div className="col-2">
                  <i class="fas fa-film profile-fas" />
                </div>

                <div className="col-10 pl-5">
                  <h3>
                    Films: <strong>{this.state.filmNames.length}</strong>
                  </h3>

                  <ul>
                    {this.state.filmNames.map((name, index) => (
                      <li key={index}>{name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ProfileFilms>
          </div>
          <div className="col-4">
            <ProfileVehicles>
              <div className="row">
                <div className="col-2">
                  <i class="fas fa-truck-monster profile-fas" />
                </div>
                <div className="col-10 pl-5">
                  <h3>
                    Vehicles: <strong>{vehicles.length}</strong>
                  </h3>
                  <ul>
                    {vehicles && vehicles.length ? (
                      this.state.vehicleNames.map((name, index) => (
                        <li key={index}>{name}</li>
                      ))
                    ) : (
                      <p>No Vehicles</p>
                    )}
                  </ul>
                </div>
              </div>
            </ProfileVehicles>
          </div>
          <div className="col-4">
            <ProfileShips>
              <div className="row">
                <div className="col-2">
                  <i class="fas fa-plane-departure profile-fas" />
                </div>

                <div className="col-10 pl-5">
                  <h3>
                    Starships: <strong>{ships.length}</strong>
                  </h3>
                  <ul>
                    {ships && ships.length ? (
                      this.state.shipNames.map((name, index) => (
                        <li key={index}>{name}</li>
                      ))
                    ) : (
                      <p>No Ships</p>
                    )}
                  </ul>
                </div>
              </div>
            </ProfileShips>
          </div>
        </div>
      </ProfileWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.setFavorites // setFavorites changed to favorite
  };
}

export default connect(
  mapStateToProps,
  { setFavorites, removeFave }
)(UserProfile);
