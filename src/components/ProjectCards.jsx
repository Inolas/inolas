// import React, {Component} from 'react'
// import { threadId } from 'worker_threads';

// class ProjectCards extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             Title:[]
//         };
//       }
//     render(){
       
//         const App = () =>(
//             <div>
//                 <ProjectCard
//                     Title={this.state.Title}
//                     StartDate="2016-2017"
//                     Associated=""
//                     ProjectLink=""
//                     imagePath=""
//                     Description="Translates Physics questions into Free Bosy Diagrams"
//                 ></ProjectCard>
//                 {/* <ProjectCard
//                     Title="Mechanographics"
//                     StartDate="2016-2017"
//                     Associated=""
//                     ProjectLink=""
//                     imagePath=""
//                     Description="Translates Physics questions into Free Bosy Diagrams"
//                 ></ProjectCard> */}
//             </div>
//         );
//         const ProjectCard = (props) => (
//             <div className="project-card cards">
//                 <img src={App.imagePath} className="project-card_image" alt="project logo"/>
//                 <div className="project-card_content">
//                     <h3 className="project-card-content_title">{props.Title}</h3>
//                     <p className="project-card-content_text">{this.props.Description}</p>
//                     {/* <ul className="movie-card-content__oscars">
//                         { renderOscars(props.oscars) }
//                     </ul> */}
//                 </div>
//             </div>
//         );
//         return (
//             <section className="resume-section p-3 p-lg-5 align-items-center" id="projects">
//             <div className="w-100">
//                 <h2 className="mb-5">Projects</h2>
//                 <ProjectCard></ProjectCard><ProjectCard></ProjectCard>
//                 <ProjectCard></ProjectCard><ProjectCard></ProjectCard>
//                 <ProjectCard></ProjectCard><ProjectCard></ProjectCard>
                
//             </div>
//             </section>
//         )
//     //     return(
//     //         <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
//     //         <div className="w-100">
//     //             <h2 className="mb-5">Projects</h2>
//     //         </div>

//     //         </section>
//     //     )
//     }
//     componentDidMount(){
//         for(const [key,value] of Object.entries(this.props.Title)){
//             this.state.Title.push(value);
//         }
//         // this.setState({
//         //     Title: Title
//         // })
//     }
// }

// export default ProjectCards;