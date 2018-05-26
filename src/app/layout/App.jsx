import React, { Component } from "react";
import Navbar from "../../features/Navbar/Navbar";
import Dashboard from "../../features/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App font-sans aliased bg-grey-light">
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
