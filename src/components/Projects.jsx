import React, {Component} from 'react'

class Projects extends Component{
    render(){
        const App = () =>(
            <div>
                <ProjectCard
                    Title="Version Control System in Java"
                    StartDate="2016-2017"
                    Associated=""
                    ProjectLink=""
                    imagePath=""
                    Description="Translates Physics questions into Free Bosy Diagrams"
                ></ProjectCard>
                <ProjectCard
                    Title="Mechanographics"
                    StartDate="2016-2017"
                    Associated=""
                    ProjectLink=""
                    imagePath=""
                    Description="Translates Physics questions into Free Bosy Diagrams"
                ></ProjectCard>
            </div>
        );
        const ProjectCard = (props) => (
            <div className="project-card cards">
                <img src={props.imagePath} className="project-card_image" alt="project logo"/>
                <div className="project-card_content">
                    <h3 className="project-card-content_title">{App.Title}</h3>
                    <p className="project-card-content_text">{App.Description}</p>
                    {/* <ul className="movie-card-content__oscars">
                        { renderOscars(props.oscars) }
                    </ul> */}
                </div>
            </div>
        );
        return (
            <section className="resume-section p-3 p-lg-5 align-items-center" id="projects">
            <div className="w-100">
                <h2 className="mb-5">Projects</h2>
                <ProjectCard></ProjectCard><ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard><ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard><ProjectCard></ProjectCard>
                
            </div>
            </section>
        )
    //     return(
    //         <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
    //         <div className="w-100">
    //             <h2 className="mb-5">Projects</h2>
    //         </div>

    //         </section>
    //     )
    }
}

export default Projects;