import React , {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'
import TodosComponent from './TodosComponent'

class TodoApp extends Component{

    render(){
        return(
            <div className="ToDoApp">
                <Router>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" exact component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" exact component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/listTodos" exact component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/updateTodos/:id" exact component={TodosComponent}/>
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent}/>
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






export default TodoApp ;
