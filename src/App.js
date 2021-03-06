import React, { Component } from 'react';

import Layout from './container/Layout/Layout';
import Navigation from './components/Navigations/Navigation';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ProjectModal from './components/ProjectModal/ProjectModal';
import styles from './App.module.css';
import Swal from 'sweetalert2';
import swalIamge from './images/Placement.jpg';

let initialMessage = document.createElement('div');
initialMessage.style.textAlign = 'left';
initialMessage.style.fontSize = '14px';
initialMessage.innerHTML = 
'<div><strong>UI builder</strong></div>' +
'<div>React.js</div>' +
'<div><strong>Deployment platform</strong></div>'+
'<div>Firebase</div>' +
'<div><strong>Summary</strong></div>'+
'<div>When selecting UI builder, it can be tough to justify</div>' +
'<div>the overhead cost of using react.js for a portfolio.</div>' +
'<div>However, unlike many other portfolios, I wanted</div>' +
'<div>to create a SPA with mini projects not redirecting</div>' +
'<div>to a new URL.</div>' +
'<div><strong>Objective</strong></div>' +
`<div>A chance to get to know you! <img src="${swalIamge}" style='width:20px;'></div>`;
Swal.fire({
  title: 'Welcome to JP portfolio!',
  html: initialMessage,
  type: 'info',
  confirmButtonText: "Let's start!",
  allowOutsideClick: false,
  allowEscapeKey: false
});

class App extends Component {
  state = {
    aboutMeRef: React.createRef(),
    projectRef: React.createRef(),
    contactRef: React.createRef(),
    projectModalShow: false,
    projectLabel: 'not set',
    cityInfo: [
      { label: 'City', output: null },
      { label: 'Temp', output: null },
      { label: 'Description', output: null },
      { label: 'Humidity', output: null }
    ]
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
      projectLabel: type,
    });
  }

  projectCloseHandler = () => {
    this.setState({
      projectModalShow: false,
      projectLabel: 'not set'
    });
  }

  render() {
    let DisplaySwitcher = [];
    if (this.state.projectModalShow) {
      DisplaySwitcher = [styles.AppHide];
    }

    return (
      <Layout>
        <ProjectModal
          show={this.state.projectModalShow}
          projectClose={this.projectCloseHandler}
          projectLabel={this.state.projectLabel} />
        <div className={DisplaySwitcher.join(' ')}>
          <Navigation
            aboutMeView={this.aboutMeScrollToContentHandler}
            projectView={this.projectsScrollToContentHandler}
            contactView={this.contactScrollToContentHandler} />
          <AboutMe ref={this.state.aboutMeRef} />
          <Projects
            ref={this.state.projectRef}
            projectStart={this.projectStartHandler} />
          <Contact ref={this.state.contactRef} />
        </div>
      </Layout>
    );
  }
}

export default App;
