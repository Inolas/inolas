import React, {Component} from 'react';

export default class ProjectCards extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
     
    componentDidMount(){
        fetch('json/projects.json')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                items: json,
            })
        });
    }

    project_cards(items){
        let card = []
            card.push(<div className="row">  
                        <div className="col-md-12 col-sm-12 resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
                            <div className="resume-content">
            <span className="text-primary">{items.started} - {items.finished}</span>
                                <h3 className="mb-0">{items.title}</h3><h4>{items.subtitle}</h4>
                                <div className="subheading">{items.place}</div>
                                <p className="lead">
                                    {items.description}<br></br>
                                    Publication: <a href="https://www.ijcaonline.org/archives/volume165/number11/jain-2017-ijca-914049.pdf" target="_blank" className="fa-link fa text-primary" rel="noopener noreferrer">
                                    Visualization of Free Body Diagrams
                                    <span className="sr-only="></span></a>
                                </p>
                            </div>
                        </div>
                    </div>)
            }

    roject_cards(items){
        let card = []
        for (let count = 0; count < 5; count++) {
            card.push(<a href={items[count].html_url}>
                <div className="row project-card">
                    <div key={items[count].html_url} className="project-card_content">
                        <span className="project-card-content_title"><h3>{items[count].name}</h3></span>
                        <p className="project-card-content_text">{items[count].description}</p>
                    </div>
                </div>
            </a>)
        }
        return card
    }
//componentMount runs after render, then updates the result
    render(){
        var {isLoaded, items } = this.state;
        
        if(!isLoaded){
            return <div>Loading...</div>
        }
        else{            
            return(
            <div className="col-md-6">
                <h2 className="mb-5">Projects</h2>
                {this.project_cards(items)}
            </div>
            )
        }
    }
}


       
