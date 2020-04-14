import React, {Component} from 'react';

export default class GitHubRepos extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount(){
        fetch('https://api.github.com/users/Inolas/repos?sort=updated')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                items: json,
            })
        });
    }
    repo_cards(items){
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
                <h2 className="mb-5">GitHub Repositories</h2>
                {this.repo_cards(items)}
            </div>
            )
        }
    }
}