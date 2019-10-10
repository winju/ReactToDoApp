import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      welcomeMessage: ""
    };
  }
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}
          &nbsp; You can manage your todos from <Link to="/ListTodos">here</Link>
        </div>
        <div className="container">
          Click here to get a customized welcome message.
          <button className="welcomeButton" onClick={this.retreiveMessage}>
            Get welcome message
          </button>
        </div>
        <div className="container">{this.state.welcomeMessage}</div>
      </>
    );
  }

  retreiveMessage = () => {
    // HelloWorldService.callHelloWorldAPI()
    // .then(  res =>{
    //     console.log('The response that is coming is: ',res.data);
    //     this.setState({
    //         welcomeMessage : res.data
    //     })
    // })
    // HelloWorldService.callHelloWorldBeanAPI()
    // .then(  res =>{
    //     console.log('The response that is coming is: ',res.data.message);
    //     this.setState({
    //         welcomeMessage : res.data.message
    //     })
    // })
    HelloWorldService.callHelloWorldPathVariableAPI(
      this.props.match.params.name
    ).then(res => {
      console.log("The response that is coming is: ", res.data.message);
      this.setState({
        welcomeMessage: res.data.message
      });
    });
  };
}

export default WelcomeComponent;
