import React , {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

class TodoApp extends Component{

    render(){
        return(
            <div className="ToDoApp">
                <Router>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" exact component={LoginComponent}/>
                            <Route path="/welcome/:name" exact component={WelcomeComponent}/>
                            <Route path="/todos" exact component={TodosComponent}/>
                            <Route path="/logout" exact component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>  
                    <FooterComponent/>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

class HeaderComponent extends Component{
    render(){

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log('The user logged in ',isUserLoggedIn );
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                    <div><a href="http://www.in28minutes.com" className="navbar-brand">in28minutes</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/winju">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>  
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )        
    }
}

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
        if(this.state.username === 'winju' && this.state.password === 'abc'){

            AuthenticationService.registerSuccesssfulLogin(this.state.username, this.state.password);
            let isUserLoggedIn = AuthenticationService.isUserLoggedIn();
            console.log('The user logged in ',isUserLoggedIn );
            this.setState({
                login : true,
                firstTime : 1
            })
            this.props.history.push(`/welcome/${this.state.username}`)
        }else{
            this.setState({
                login : false,
                firstTime : 1
            })
        }
        
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

//Functional Component was built for checking but not required now as used conditional && instead
// function CheckLoginSuccess(props){
   
//     if(props.successcheck == true){
//         console.log('In function component ',props.successcheck);
//         return <div>Logging In</div>
//     }else if(props.successcheck == false){
//         console.log('In function component ',props.successcheck);
//         return <div>Invalid Credentials</div>
//     }else{
//         return null
//     }
// }

class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                <h1>Welcome</h1>
            </div>
        )        
    }
}

class TodosComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos :[
                {id: 1 , description: 'Learn React', done: false, targetDate: new Date() },
                {id: 2 , description: 'Learn React Native', done: false, targetDate: new Date() },
                {id: 3 , description: 'Learn SpringBoot', done: false, targetDate: new Date() }
            ] 
        }
    }

    render(){
        return(
            <div>
                    <h1>List Todos</h1>
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>description</th>
                                    <th>IsCompleted</th>
                                    <th>Target Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todos.map(
                                        todo => 
                                            <tr>
                                                <td>{todo.description}</td>
                                                <td>{todo.done.toString()}</td>
                                                <td>{todo.targetDate.toString()}</td>
                                            </tr>
                                        
                                    )
                                }                           
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return(
            <div>
                <footer className="footer">
                    <span className="text-muted">All Rights Reserved 2019</span>
                </footer>
            </div>
        )        
    }
}

class LogoutComponent extends Component{
    render() {
        return (
             <div>
                 <h1>You are logged out</h1>
                 <div className="container">
                     Thank you for using our application
                 </div>
             </div>
        );
    }
}

class ErrorComponent extends Component{
    render(){
        return(
            <div>Some error has happened please contact support.<br/>mail@gmail.com</div>
        )        
    }
}

export default TodoApp ;
