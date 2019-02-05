import React, { Component } from 'react';

import Layout from './container/Layout/Layout';
import Navigation from './components/Navigations/Navigation';

class App extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
      </Layout>
    );
  }
}

export default App;
