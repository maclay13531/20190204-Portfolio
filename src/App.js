import React, { Component } from 'react';

import Layout from './container/Layout/Layout';
import Navigation from './components/Navigations/Navigation';
import AboutMe from './components/AboutMe/AboutMe';

class App extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <AboutMe />
      </Layout>
    );
  }
}

export default App;
