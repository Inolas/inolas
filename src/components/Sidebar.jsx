import React, { Component } from 'react'
import Social from './SocialMedia'

export default class Sidebar extends Component {
  render() {
    const color = {
      color: '#000'
    };
    return (
        // <div id="sideNav" className="navnar navbar-expand-lg navbar-dark">

        // </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav" 
        data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-none d-lg-block">
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="images/profile2.png" alt=""></img>
            </span>
            <span className="d-block d-lg-none">INOLAS</span>
          </a>
          <div  className="sidebar-social">
            <Social>Hide me when screen size small</Social>
          </div>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger active" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#certificates">Certificates</a>
            </li> */}
          </ul>
        </div>
        <div id="hover-visible">
          <h6 className="mb-0" style={{visibility:""}}>
          <span style={color}>    Made with Double Capuccino in my Body and Cube in my Mind.</span>
            </h6>
        </div>
        
      </nav>
    </div>
    )
  }
}