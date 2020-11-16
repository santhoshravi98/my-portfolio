import React, { Component } from "react";
import Auxillary from "../src/HOC/Auxillary/Auxillary";
import Layout from "../src/HOC/Layout/Layout";

//Main First Route of the Application, We call Layout
class app extends Component {
  render() {
    return (
      <Auxillary>
        <Layout />
      </Auxillary>
    );
  }
}

export default app;
