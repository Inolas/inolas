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
                        <span role="img" className="palm-tree" aria-label="palm-tree">Long Beach, CA 🌴</span><br></br>(562) 562-0562 <br></br>
                        <a href="mailto:salonibuddhadeo@gmail.com">salonibuddhadeo@gmail.com</a>
                    </div>
                    <p className="lead mb-5">I was in 9th grade when I "developed my first website"...... fastforward today I like to work with Databases, 
                    I get inspiration and motivation from observing things in my surrounding, and that is why I prefer.
                    I love creating
                    </p>
                    {/* <div className="navbar-toggler" style={{visibility:"hidded;"}}
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" 
                        aria-label="Toggle navigation"> */}
                        Hide me when screen size wide
                        <div className="social-about">
                            <Social></Social>
                        </div>

                </div>
                </section>
        )
    }
}