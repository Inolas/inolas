import React, {Component} from 'react';

export default class Projects extends Component{
    render(){
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
                <div className="w-100">
                <h2 className="mb-5">Projects</h2>
                <div className="row">
                    <div className="col-6 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">January 2018 - December 2019</span>
                            <h3 className="mb-0">Mechanographics</h3><h4>Visualization of Free Body Diagrams</h4>
                            <div className="subheading">KJ Somaiya College of Engineering, Mumbai</div>                            
                            <p>BE project<br></br>Python script<br></br>Blah Blah Blah;
                            </p>
                        </div>
                    </div>
                    <div className=" col-6 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">January 2018 - December 2019</span>
                            <h3 className="mb-0">Masters of Science</h3><h4>Computer Science</h4>
                            <div className="subheading">California Statie University, Long Beach</div>
                            <p>Joomla, Joomla, and more Jomla <br></br>Then a bit of Angular; Strapi; Angular again ;<br></br> and Resact js as well</p>
                        </div>
                    </div>
                    <div className=" col-6 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">September 2017 - November 2017</span>
                            <h3 className="mb-0">Teaching Assistant</h3><h4>Digital Electronics and Internet of Things</h4>
                            <div className="subheading"><strike>Advanced Computers, India</strike></div>
                            <p>Practical for Raspberry Pi 3; Gates; ARM, etc, theory.</p>    
                        </div>
                    </div>
                    <div className=" col-6 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">June 2015 - October 2015</span>
                            <h3 className="mb-0">Pavoh</h3><h4>Frontend Web Developer Intern</h4>
                            <div className="subheading">KJ Somaiya College of Engineering, Mumbai</div>
                            <p></p> 
                        </div>
                    </div>
                    <div className=" col-6 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">December 2014 - January 2015</span>
                            <h3 className="mb-0">Internship cum Training</h3><h4>Android App Development</h4>
                            <div className="subheading">ECIL, Hyderabad, India</div>
                            <p></p>
                        </div>
                    </div>
                </div>
                </div>    
            </section>
        )
    }
}