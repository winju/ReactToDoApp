import React, {Component} from 'react';


class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                <h1>Welcome {this.props.match.params.name}</h1>
            </div>
        )        
    }
}

export default WelcomeComponent;