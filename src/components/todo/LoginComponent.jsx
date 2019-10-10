import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';


class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            username : 'winju',
            password : '',
            login : '',
            firstTime : ''
        }
    }

    // usernameChangeHandler = (event)=>{
    //     console.log(event.target.value);
    //     this.setState({
    //         username : event.target.value
    //     })
    // }

    // passwordChangeHandler = (event)=>{
    //     console.log(event.target.value);
    //     this.setState({
    //         password : event.target.value
    //     })
    // }

    changeHandler = (event)=>{
        this.setState({
            [event.target.name] : event.target.value // the form element name(event.target.name) should match state elemet name
        })
    }

    loginClicked = ()=>{

        // AuthenticationService.executeSpringAuthentication(this.state.username, this.state.password)
        // .then(()=>{
        //         AuthenticationService.registerSuccesssfulLogin(this.state.username, this.state.password);
        //         this.setState({
        //             login : true,
        //             firstTime : 1
        //         })
        //         this.props.history.push(`/welcome/${this.state.username}`)
        //     }
        // )
        // .catch(()=>{
        //         this.setState({
        //             login : false,
        //             firstTime : 1
        //         })
        //      }
        // )

        AuthenticationService.executeJWTAuthentication(this.state.username, this.state.password)
        .then((response)=>{
                AuthenticationService.registerSuccesssfulLoginForJWT(this.state.username, response.data.token);
                this.setState({
                    login : true,
                    firstTime : 1
                })
                this.props.history.push(`/welcome/${this.state.username}`)
            }
        )
        .catch(()=>{
                this.setState({
                    login : false,
                    firstTime : 1
                })
             }
        )
        
        console.log('In loginchecked ',this.state.login);
    }
    //value={this.state.username}
    //value={this.state.password}
    render(){
        return(
            <div>
                <div className="container">
                    <h1>Login</h1>
                    {/* <CheckLoginSuccess successcheck={this.state.login} /> */}
                    {this.state.login && <div>Logging In</div>}
                    {!this.state.login && this.state.firstTime && <div className="alert alert-warning">Invalid Credentials</div>}
                    Username:<input type="text" name="username"  onChange={this.changeHandler}/>
                    Password:<input type="password" name="password"  onChange={this.changeHandler}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent;