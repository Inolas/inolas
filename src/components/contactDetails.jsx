import React, {Component} from 'react';

export default class contactDetails extends Component{
    getInitialState(){
        return{ showResults: false };
    }
    onClick(){
        this.setState({ showResults: true });
    }
    render(){
        return(
            <div>
                <span onClick={this.onClick}>Click here to view Contact Details
                {/* <input type="submit" value="Search" onClick={this.onClick} /> */}
                { this.state.showResults ? <div>Text</div> : null }
                </span>
            </div>
        );
    }
}