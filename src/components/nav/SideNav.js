import React from "react";
import { Link } from "react-router-dom";
import { Logo, SideNavWrapper } from "../../styles/header_styles.js";
import logo from "../../img/sw.png";

const SideNav = () => {
  return (
    <div>
      <Logo>
        <img className="logo" src={logo} alt="star wars logo" />
      </Logo>
      <SideNavWrapper>
        <ul>
          <li>
            <Link to="/">
              <i class="fas fa-home" /> Home
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/Users">
              <i class="fas fa-users" /> Users
            </Link>
          </li>
          <hr />
        </ul>
      </SideNavWrapper>
    </div>
  );
};

export default SideNav;
