import React, {Component} from 'react'

export default class Exp extends Component{
    render(){
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="experience">
                <div className="w-100">
                <h2 className="mb-5">Experience</h2>
                <div className="row">
                    <div className="col-md-6 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">February 2018 - December 2019</span>
                            <h3 className="mb-0">Graduate Assistant</h3><h4>Office of Accreditation, College Of Business</h4>
                            <div className="subheading">CSU, Long Beach</div>
                            <p className="mb-3">
                                ★ Data Analysis - Summarized and visualized student scores to compare their performance
                                <br></br>
                                ★ Generated score reports and item analysis files for 10 different
                                California State Universities for the Business
                                <br></br>
                                ★ Reviewed resumes of faculty to classify them according to a given standard.
                                <br></br>
                                ★ Assessment Test to assess their business school for accreditation.
                                <br></br>
                            </p>
                            <div className="subheading">Technology and Skills Used: </div>
                            <span className="text-"> MS Excel, Analytical Reasoning, Attention to detail, SQL</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">June 2019 - August 2019</span>
                            <h3 className="mb-0">Student Web Developer</h3><h4>ASI Communications</h4>
                            <div className="subheading">CSU, Long Beach</div>
                            <p>
                            ★ Worked on front-end of University Feedback and Information page.
                                Configured iPad for installing it on Kiosks on various location on campus<br></br>
                            ★ Website updates for on campus events using Joomla<br></br>
                            ★ Research on Headless CMS like Strapi and DirectUs to migrate the website from Joomla
                            </p>
                            <div className="subheading">Technology and Skills Used: </div>
                            <span className="text-">JavaScript, JQuery, AngularJS, Joomla</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">September 2017 - November 2017</span>
                            <h3 className="mb-0">Teaching Assistant</h3><h4>Digital Electronics and Internet of Things</h4>
                            <div className="subheading">Advanced Computers, India</div>
                            <p>
                            ★ Digital Electronics<br></br>
                            ★ Internet of Things<br></br>
                            ★ Conducted practical sessions on <a href="https://youtu.be/v74TlbXg1aE"target="_blank" rel="noopener noreferrer">Raspberry Pi 3 Model B.</a>
                            </p>
                            <div className="subheading">Technology / Knowledge Used: </div>
                            <span className="text-">Logic Gates, Raspberry Pi, Internet of Things</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">June 2015 - October 2015</span>
                            <h3 className="mb-0">Pavoh</h3><h4>Frontend Web Developer Intern</h4>
                            <div className="subheading">RiiDL Incubator, Mumbai
                            &nbsp;<a href="https://riidl.org/assets/assets/docs/RIIDL_Broucher.pdf" target="_blank" className="fa-link fa text-primary" rel="noopener noreferrer">
                                <span className="sr-only="></span></a>
                            </div>
                            <p>
                            ★ Created the coming soon page using Javascript <br></br>
                            ★ Create responsive login page and initial login page with the help of a template.<br></br>
                            ★ RiiDL (Research Innovation Incubation Design Lab) is an Innovation Accelerator and Incubation on the Somaiya Vidyaviahr campus. 
                                RiiDL is FABLAB and associated with MIT's Center for Bits and Atoms, USA.
                            </p>
                            <div className="subheading">Technology and Skills Used: </div>
                            <span className="text-">JavaScript, HTML5, Bootstrap</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="resume-content">
                        <span className="text-primary">December 2014 - January 2015</span>
                            <h3 className="mb-0">Internship and Training</h3><h4>Android App Development</h4>
                            <div className="subheading">ECIL, Hyderabad, India</div>
                            <p>
                            ★ Developed an android application - File Xplore. <br></br>
                            ★ The application performed basic file manipulation functions like cut, copy, paste, create file, 
                            rename, and delete, apart from browsing the files. <br></br>
                            ★ We used list adapter for accessing the files. <br></br>
                            </p>
                            <div className="subheading">Technology and Skills Used: </div>
                            <span className="text-">Eclipse, Java, Android Development</span>
                        </div>
                    </div>
                </div>
                </div>    
            </section>
        )
    }
}