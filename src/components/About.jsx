import React, {Component} from 'react'
import Social from './SocialMedia'
import contactDetails from './contactDetails'

export default class About extends Component{
    render()
        {
        return(
            
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <div className="mb-0">
                        <h1> <span className="text-primary">Saloni</span> Buddhadeo</h1>
                        {/* <h3 className="text-right"><span className="text-primary">Inolas</span></h3> */}
                    </div>
                    <div className="subheading mb-5">
                        <span role="img" className="palm-tree" aria-label="palm-tree">Long Beach, CA 🌴</span>
                        <contactDetails></contactDetails>
                        {/* <br></br>(657) 666-0787 <br></br>
                        <a href="mailto:salonibuddhadeo@gmail.com">salonibuddhadeo@gmail.com</a> */}
                    </div>
                    <p className="lead mb-5">
                        Web developer and a software engineer who loves to take challenges and believes in the idea of constant creation
                        
                        {/* I was in 9th grade when I "developed my first website"...... fastforward today I like to work with Databases, 
                    I get inspiration and motivation from observing things in my surrounding, and that is why I prefer.
                    I love creating */}
                    </p>
                    {/* <div className="navbar-toggler" style={{visibility:"hidded;"}}
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" 
                        aria-label="Toggle navigation"> */}
                        <div style={{visibility:"collapse"}}>
                        Hide me when screen size wide
                        <div className="social-about">
                            <Social></Social>
                        </div>
                        </div>

                </div>
                </section>
        )
    }
}