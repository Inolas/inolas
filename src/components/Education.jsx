import React, {Component} from 'react'

export default class Education extends Component{
    render(){
        // var edu = {
        //     const App = () => (
        //         <div>
        //           <EducationCard
        //             date=""
        //             university=""
        //             degree="A 1972 film directed by Francis Ford Coppola."
        //             concentration={3}></EducationCard>
        //           <EducationCard
        //             imagePath="https://i.imgur.com/mhzWZtB.jpg"
        //             title="The Untouchables"
        //             text="A 1987 film directed by Brian De Palma."
        //             oscars={1}></EducationCard>
        //         </div>
        //       );
        // }
        const ml = {
            margin: '0px 0px'
          };
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
            <h2 className="mb-5">Education</h2>
            <div className="row">
                <div className="col-md-6 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                    <span className="text-primary">January 2018 - December 2019</span>
                        <h3 className="mb-0">Masters of Science</h3><h4>Computer Science</h4>
                        <div className="subheading">California Statie University, Long Beach</div>
                        <p>GPA: 3.2</p>
                        <div className="subheading">Courses taken:</div>
                        <ul className="fa-ul mb-0" style={ml}>
                        <li> Advanced Algorithms</li>
                        <li> Software Engineering and Software Architecture</li>
                        <li> Database Architecture</li>
                        <li> Big Data and NoSQL</li>
                        <li> Software Frameworks using .NET</li>
                        <li> Object Oriented Programming</li>
                        <li> Deep Learning</li>

                        </ul>
                    </div>
                    
                </div>
                <div className="col-md-6 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="resume-content">
                    <span className="text-primary">August 2013 - July 2017</span>
                        <h3 className="mb-0">Bachelor of Engineering</h3><h4>Computer Engineering</h4>
                        <div className="subheading">KJ Somaiya College of Engineering, Mumbai</div>
                        <p>GPA: 3.05</p>                        
                        <div className="subheading">Courses taken:</div>
                            <ul class="fa-ul mb-0" style={ml}>
                            <li> Algorithms</li>
                            <li> Software Engineering and Software Architecture</li>
                            <li> Database Architecture</li>
                            <li> Artificial Intelligence</li>
                            <li> Web Development</li>
                            <li> Human Computer Interaction</li>
                            <li> Machine Learning</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            )
        }
    }