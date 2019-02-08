import React, { Component } from 'react';

import Layout from './container/Layout/Layout';
import Navigation from './components/Navigations/Navigation';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

class App extends Component {
  state = {
    aboutMeRef: React.createRef(),
    projectRef: React.createRef()
  }

  aboutMeScrollToContent = () => {
    this.state.aboutMeRef.current.scrollIntoView({bahavior: 'smooth'})
  }

  projectsScrollToContent = () => {
    this.state.projectRef.current.scrollIntoView({bahavior: 'smooth'})
  }

  render() {
    return (
      <Layout>
        <Navigation
          aboutMeView={this.aboutMeScrollToContent}
          projectView={this.projectsScrollToContent} />
        <AboutMe ref={this.state.aboutMeRef} />
        <Projects ref={this.state.projectRef} />
      </Layout>
    );
  }
}

export default App;
