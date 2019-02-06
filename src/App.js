import React, { Component } from 'react';

import Layout from './container/Layout/Layout';
import Navigation from './components/Navigations/Navigation';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <AboutMe />
        <Projects />
      </Layout>
    );
  }
}

export default App;
