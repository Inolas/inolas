import React, {Component} from "react";

export default class Social extends Component{
    render(){
        return(
            <div className="social-icons mb-3">
            <span className="linkedin-icon" data-toggle="tooltip" title="LinkedIn">
              <a className="linkedin-icon" href="https://www.linkedin.com/in/saloni-buddhadeo-b94a67115/" 
              target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
            <span className="github-icon" data-toggle="tooltip" title="Github">
              <a href="https://www.github.com/inolas" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </span>
            <span className="leetcode-icon" data-toggle="tooltip" title="Leetcode">
              <a href="https://www.leetcode.com/inolas" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-leetcode">LC</i>
              </a>
            </span>
            </div>
        )
    }
}