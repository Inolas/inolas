import React, {Component} from 'react'
import Social from './SocialMedia'

export default class About extends Component{
    render()
        {
        return(
            
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <div className="mb-0">
                        <h1>Saloni Buddhadeo</h1>
                        <h3 classNameName="text-right"><span className="text-primary">Inolas</span></h3>
                    </div>
                    <div className="subheading mb-5">
                        5701 E Los Arcos · Long Beach, CA 90815 · (562) 562-0562 <br></br>
                        <a href="mailto:salonibuddhadeo@gmail.com">salonibuddhadeo@gmail.com</a>
                    </div>
                    <p className="lead mb-5">I am experienced in .</p>
                    {/* <div className="navbar-toggler" style={{visibility:"hidded;"}}
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" 
                        aria-label="Toggle navigation"> */}
                        Hide me when screen size wide
                            <Social></Social>

                </div>
                </section>
        )
    }
}