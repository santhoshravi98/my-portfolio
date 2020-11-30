import React, { Component } from "react";
import Auxillary from "../src/HOC/Auxillary/Auxillary";
import Layout from "../src/HOC/Layout/Layout";
import {Route, Switch} from 'react-router-dom'
import HomePageBanner from '../src/Containers/HomePageBanner/HomePageBanner'

//Main First Route of the Application, We call Layout
class app extends Component {
  render() {
    return (
      <Auxillary>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePageBanner}/>
          </Switch>

        </Layout>
      </Auxillary>
    );
  }
}

export default app;
