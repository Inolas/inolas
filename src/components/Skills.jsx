import React, {Component} from 'react'

export default class Skills extends Component{
    render(){
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages &amp; Tools </div>
                <div className="row mb-5">
                    <div className="col-6">
                        <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fab fa-java"></i>
                            Java</li>
                        <li>
                            <i className="fa-li fa fa-plus"></i>
                            Python</li>
                        <li>
                            <i className="fa-li fa fa-plus"></i>
                            SQL, Spatial Database</li>
                        <li>
                            <i className="fa-li fab fa-android"></i>
                            Android App Development</li>
                        </ul></div>
                        <div className="col-6">
                        <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fab fa-java"></i>
                            Java</li>
                        <li>
                            <i className="fa-li fa fa-plus"></i>
                            Python</li>
                        <li>
                            <i className="fa-li fa fa-plus"></i>
                            SQL, Spatial Database</li>
                        <li>
                            <i className="fa-li fab fa-android"></i>
                            Android App Development</li>
                        </ul>
                    </div>
                </div>
                
                <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                    <i className="fab fa-html5"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-css3-alt"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-js"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-angular"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-react"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-node-js"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-java"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-android"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-pyton"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-c"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-cpp"></i>
                </li>
                <li className="list-inline-item">
                    <i className="fab fa-sql"></i>
                </li>
                </ul>

                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                <li>
                    <i className="fa-li fa fa-plus"></i>
                    Mobile-First, Responsive Design</li>
                <li>
                    <i className="fa-li fa fa-plus"></i>
                    Cross Browser Testing &amp; Debugging</li>
                <li>
                    <i className="fa-li fa fa-plus"></i>
                    Cross Functional Teams</li>
                <li>
                    <i className="fa-li fa fa-plus"></i>
                    Agile Development &amp; Scrum</li>
                </ul>
            </div>
            </section>
        )
    }
}