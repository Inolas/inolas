import React, {Component} from 'react'
import Social from './SocialMedia'
import contactDetails from './contactDetails'

export default class About extends Component{
    render()
        {
        return(
            
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <div className="mb-0 row">
                        <div className="text-center col-sm-3 d-block d-lg-none my-auto">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="images/profile2.png" alt=""></img>
                        </div>
                        <div className="col-sm-9">
                            <h1> <span className="text-primary">Saloni</span> Buddhadeo</h1>
                            {/* <h3 className="text-right"><span className="text-primary">Inolas</span></h3> */}
                        </div>
                        <div class="col-sm-3">
                            {/* <button id="change-theme-btn">Mode</button> */}
                            {/* <script>
                            {function retheme() {
                                var cc = document.body.className;
                                if (cc.indexOf("darktheme") > -1) {
                                    document.body.className = cc.replace("darktheme", "");
                                   if (opener) {opener.document.body.className = cc.replace("darktheme", "");}
                                   localStorage.setItem("preferredmode", "light");
                                } else {
                                    document.body.className += " darktheme";
                                   if (opener) {opener.document.body.className += " darktheme";}
                                   localStorage.setItem("preferredmode", "dark");
                                }
                            }}
                            </script> */}
                        </div>

                    </div>
                    <div className="subheading mb-5">
                    Long Beach, CA 
                        <contactDetails></contactDetails>
                        {/* <br></br>+1 (657) 666-0787  */}
                        <br></br><a href="mailto:salonibuddhadeo@gmail.com">SaloniBuddhadeo@gmail.com</a>
                        {/* <a>firstname lastname @ gmail dot com</a> */}
                    </div>
                    <div style={{visibility:"collapse"}}>
                        Hide me when screen size widE
                        <div className="social-about">
                            <Social></Social>
                        </div>
                    </div>
                    <p className="lead mb-5">
                        <h4>Things you are passionate about are never random.</h4>
                        Software Engineer and a Web Developer.<br/> 
                        I like to take challenges and create new things.
                        
                        {/* I was in 9th grade when I "developed my first website"...... fastforward today I like to work with Databases, 
                    I get inspiration and motivation from observing things in my surrounding, and that is why I prefer.
                    I love creating */}
                    </p>
                    {/* <p className="mb-5">
                        <h5>Ongoing Project</h5>
                        Android app for remote consultation &nbsp;
                        <a href="https://github.com/dishalaser-com/DLA_FirebaseAuthentication">
                            <span className="fab fa-github" style={{color:"white"}}></span>
                        </a>
                    </p> */}
                    {/* <div className="navbar-toggler" style={{visibility:"hidded;"}}
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" 
                        aria-label="Toggle navigation"> */}
                        

                </div>
                </section>
        )
    }
}