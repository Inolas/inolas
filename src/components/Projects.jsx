import React, {Component} from 'react';

export default class Projects extends Component{
    render(){
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
                <div className="w-100">
                <h2 className="mb-5">Projects</h2>
                <div className="row">
                    <div className="col-md-6 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">May 2016 - April 2017</span>
                            <h3 className="mb-0">Mechanographics</h3><h4>Visualization of Free Body Diagrams</h4>
                            <div className="subheading">KJ Somaiya College of Engineering, Mumbai</div>                            
                            <p>BE project<br></br>A mechanics based problem is taken as input in the form of English sentence. 
                                Which is later processed using Stanford CoreNLP to render a free body diagram.
                                Publication: <a href="https://www.ijcaonline.org/archives/volume165/number11/jain-2017-ijca-914049.pdf" target="_blank" className="fa-link fa text-primary" rel="noopener noreferrer">
                                Visualization of Free Body Diagrams
                                <span className="sr-only="></span></a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">January 2018 - December 2019</span>
                            <h3 className="mb-0">Version Control System</h3><h4>Computer Science</h4>
                            <div className="subheading">California Statie University, Long Beach</div>
                            <p>Features<br></br>
                                Copies an existing repository into a destination folder of user's specified name.
                                Exit application from the command prompt using "exit" command.
                                Non-valid words (in this case, only "create" command is accepted) are r</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">September 2017 - November 2017</span>
                            <h3 className="mb-0">Teaching Assistant</h3><h4>Digital Electronics and Internet of Things</h4>
                            <div className="subheading">Advanced Computers, India</div>
                            <p>Practical for Raspberry Pi 3; Gates; ARM, etc, theory.</p>    
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">June 2015 - October 2015</span>
                            <h3 className="mb-0">M-ghar</h3><h4>Frontend Web Developer Intern</h4>
                            <div className="subheading">KJ Somaiya College of Engineering, Mumbai</div>
                            <p></p> 
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">December 2014 - January 2015</span>
                            <h3 className="mb-0">File Xplorer</h3><h4>Android App Development</h4>
                            <div className="subheading">ECIL, Hyderabad, India</div>
                            <p>One month of project work in Android Programming at ECIL (Hyderabad).
                                Learnt fundamentals of android development and implemented the knowledge to make an android application - File Xplorer 
                            </p>
                        </div>
                    </div>
                </div>
                </div>    
            </section>
        )
    }
}