import React from "react";
import "./App.css";
import SideNav from "./components/nav/SideNav";
import SideNavRoutes from "./components/nav/SideNavRoutes";
import Header from "./components/Header";
import Entry from "./components/Entry";

function App() {
  return (
    <div className="row m-0">
      <Entry />
      <div className="col-1 side-nav-container p-0">
        <SideNav />
      </div>
      <div className="col-11">
        <div className="row">
          <div className="col-12 p-0">
            <Header />
          </div>
        </div>
        <SideNavRoutes />
      </div>
    </div>
  );
}

export default App;
