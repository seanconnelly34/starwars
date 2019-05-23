import React, { Component } from "react";
import { EntryWrapper } from "../styles/header_styles.js";
import { connect } from "react-redux";
import { setUsername, setAvatar } from "../actions";

import bargs from "../img/characters/bargs.jpeg";
import c3po from "../img/characters/c3po.jpeg";
import darth from "../img/characters/darth.jpg";
import luke from "../img/characters/luke.jpeg";
import princess from "../img/characters/princess.jpg";

class Entry extends Component {
  constructor() {
    super();
    this.state = {
      avatar: "",
      username: "",
      entry: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.enter = this.enter.bind(this);
    this.avatarSelect = this.avatarSelect.bind(this);
  }

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  avatarSelect(person) {
    this.setState({ avatar: person });
    this.props.setAvatar(person);
  }

  enter() {
    {
      this.state.username.length && this.setState({ entry: true });
      this.props.setUsername(this.state.username);
    }
  }

  handleOptionSelect = type => {
    // Unselecte option selected in state
    if (type === this.state.optionSelected) {
      return this.setState({ optionSelected: null });
    }
    // Set option selected to state
    this.setState({ optionSelected: type });
  };

  render() {
    const avatar = ["avatar"];
    const boxClass = ["wrapper"];
    {
    }
    this.state.avatar && avatar.push("avatar-selected");
    {
      this.state.entry && boxClass.push("remove");
    }
    return (
      <EntryWrapper className={boxClass.join(" ")}>
        {!this.state.entry && <div className="entry" />}
        <div className="inner">
          <div className="container">
            <h2>Please choose an avatar to continue</h2>

            <img
              onClick={() => this.avatarSelect("bargs")}
              style={{
                border: this.state.avatar === "bargs" && "10px solid #00a1ff"
              }}
              src={bargs}
            />
            <img
              onClick={() => this.avatarSelect("c3po")}
              style={{
                border: this.state.avatar === "c3po" && "10px solid #00a1ff"
              }}
              src={c3po}
            />
            <img
              onClick={() => this.avatarSelect("darth")}
              style={{
                border: this.state.avatar === "darth" && "10px solid #00a1ff"
              }}
              src={darth}
            />
            <img
              onClick={() => this.avatarSelect("luke")}
              style={{
                border: this.state.avatar === "luke" && "10px solid #00a1ff"
              }}
              src={luke}
            />
            <img
              onClick={() => this.avatarSelect("princess")}
              style={{
                border: this.state.avatar === "princess" && "10px solid #00a1ff"
              }}
              src={princess}
            />
          </div>
          <div className="container">
            <h2>Enter a username</h2>
            <input
              type="text"
              placeholder="Your Username"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.enter}>Enter</button>
        </div>
      </EntryWrapper>
    );
  }
}

export default connect(
  null,
  { setUsername, setAvatar }
)(Entry);
