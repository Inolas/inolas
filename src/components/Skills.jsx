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
                            <i className="fa-li fab fa-python"></i>
                            Python</li>
                        <li>
                            <i className="fa-li fa fa-database"></i>
                            SQL, Spatial Database</li>
                        <li>
                            <i className="fa-li fab fa-android"></i>
                            Android App Development</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-plus"></i>
                            C, C++</li>
                        <li>
                            <i className="fa-li fab fa-react"></i>
                            ReactJS</li>
                        <li>
                            <i className="fa-li fa fa-database"></i>
                            GraphDatabase, Neo4J</li>
                        <li>
                            <i className="fa-li fa fa-file-excel"></i>
                            Microsoft Excel</li>
                        </ul>
                    </div>
                </div>

                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                <li>
                    <i className="fa-li fa fa-plus"></i>
                    Mobile-First, Responsive Design</li>
                <li>
                    <i className="fa-li fa fa-plus"></i>
                    Teamwork</li>
                <li>
                    <i className="fa-li fa fa-plus"></i>
                    Attention to detail</li>

                </ul>
            </div>
            </section>
        )
    }
}