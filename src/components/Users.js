import React, { Component } from "react";
import User from "./User";
import axios from "axios";
import { UserTable } from "../styles/user_table.js";

class Users extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      bool: false
    };
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/").then(res => {
      const users = res.data.results;
      this.setState({ users: users });
    });
  }

  compareBy(key) {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key, boolean) {
    let arrayCopy = [...this.state.users];
    arrayCopy.sort(this.compareBy(key));
    if (boolean) {
      this.setState({ users: arrayCopy, bool: false });
    } else {
      arrayCopy.reverse();
      this.setState({ users: arrayCopy, bool: true });
    }
  }

  render() {
    const users = this.state.users;
    const homeworlds = users.map(result =>
      result.homeworld.slice(-3).replace("/", "")
    );

    return (
      <UserTable>
        <table className="table-header">
          <tr>
            <td onClick={() => this.sortBy("name", this.state.bool)}>
              Name <i class="fas fa-sort" />
            </td>
            <td onClick={() => this.sortBy("gender", this.state.bool)}>
              Gender <i class="fas fa-sort" />
            </td>
            <td onClick={() => this.sortBy("eye_color", this.state.bool)}>
              Eyes <i class="fas fa-sort" />
            </td>
            <td onClick={() => this.sortBy("hair_color", this.state.bool)}>
              Hair <i class="fas fa-sort" />
            </td>
            <td onClick={() => this.sortBy("skin_color", this.state.bool)}>
              Skin <i class="fas fa-sort" />
            </td>
            <td onClick={() => this.sortBy("height", this.state.bool)}>
              Height <i class="fas fa-sort" />
            </td>
            <td onClick={() => this.sortBy("birth_year", this.state.bool)}>
              Birth <i class="fas fa-sort" />
            </td>
          </tr>
        </table>
        {this.state.users &&
          this.state.users.map((user, index) => (
            <User key={index} userInfo={user} />
          ))}
      </UserTable>
    );
  }
}

export default Users;
