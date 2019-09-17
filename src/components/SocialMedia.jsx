import React, {Component} from "react";

export default class Social extends Component{
    render(){
        return(
            <div className="social-icons mb-3">
            <span className="linkedin-icon">
              <a className="linkedin-icon" href="https://www.linkedin.com/in/saloni-buddhadeo-b94a67115/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
            <span className="github-icon">
              <a href="https://www.github.com/Inolas">
                <i className="fab fa-github"></i>
              </a>
            </span>
            </div>
        )
    }
}