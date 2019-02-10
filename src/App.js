import React, { Component } from 'react';

import Layout from './container/Layout/Layout';
import Navigation from './components/Navigations/Navigation';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ProjectModal from './components/ProjectModal/ProjectModal';

class App extends Component {
  state = {
    aboutMeRef: React.createRef(),
    projectRef: React.createRef(),
    contactRef: React.createRef(),
    projectModalShow: false,
    projectLabel: 'not set'
  }

  aboutMeScrollToContentHandler = () => {
    this.state.aboutMeRef.current.scrollIntoView({ bahavior: 'smooth' })
  }

  projectsScrollToContentHandler = () => {
    this.state.projectRef.current.scrollIntoView({ bahavior: 'smooth' })
  }

  contactScrollToContentHandler = () => {
    this.state.contactRef.current.scrollIntoView({ bahavior: 'smooth' })
  }

  projectStartHandler = (type) => {
    let projectModalShow = this.state.projectModalShow;
    this.setState({
      projectModalShow: !projectModalShow,
      projectLabel: type
    });
    document.body.style.overflow = 'hidden';
  }

  projectCloseHandler = () => {
    this.setState({
      projectModalShow: false,
      projectLabel: 'not set'
    });
    document.body.style.overflow = 'visible';
  }

  render() {
    return (
      <Layout>
        <ProjectModal
          show={this.state.projectModalShow}
          projectClose={this.projectCloseHandler}
          projectLabel={this.state.projectLabel} />
        <Navigation
          aboutMeView={this.aboutMeScrollToContentHandler}
          projectView={this.projectsScrollToContentHandler}
          contactView={this.contactScrollToContentHandler} />
        <AboutMe ref={this.state.aboutMeRef} />
        <Projects
          ref={this.state.projectRef}
          projectStart={this.projectStartHandler} />
        <Contact ref={this.state.contactRef} />
      </Layout>
    );
  }
}

export default App;
