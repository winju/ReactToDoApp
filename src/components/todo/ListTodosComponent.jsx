import React, {Component} from 'react';
import moment from 'moment';
import TodoDataService from '../../api/todo/ToDoDataService'
import AuthenticationService from './AuthenticationService';

class ListTodosComponent extends Component{
    constructor(props){
        super(props);
        console.log('Constructor');
        this.state = {
            todos :[] ,
            message : null
        }
    }

    componentDidMount(){
        console.log('Component Did Mount');
        this.refreshTodos();
    }

    refreshTodos= () =>{
        TodoDataService.retreiveAllTodos(AuthenticationService.getLoggeInUser())
        .then( response =>{
            console.log('The response received is: ',response.data);
            this.setState({
                todos: response.data
            })
        })
    }

    addClicked =() => {
        
        console.log(`Create a Todo`);
        this.props.history.push(`/updateTodos/-1`)
        // TodoDataService.updateSpecificTodo(AuthenticationService.getLoggeInUser(), id)
        // .then( response =>{
        //     this.setState({
        //         message: `Update of todo ${id} is done`
        //     })
        //     this.refreshTodos();
        // })
    }

    updateClicked =(id) => {
        
        console.log(`Update Clicked ${id}`);
        this.props.history.push(`/updateTodos/${id}`)
        // TodoDataService.updateSpecificTodo(AuthenticationService.getLoggeInUser(), id)
        // .then( response =>{
        //     this.setState({
        //         message: `Update of todo ${id} is done`
        //     })
        //     this.refreshTodos();
        // })
    }

    deleteToDoClicked = (id) => {
        TodoDataService.deleteSpecificTodo(AuthenticationService.getLoggeInUser(), id)
        .then( response =>{
            this.setState({
                message: `Delete of todo ${id} is completed`
            })
            this.refreshTodos();
        })
    }

    render(){
        console.log('render');
        return(
            <div>
                    <h1>List Todos</h1>
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>description</th>
                                    <th>IsCompleted</th>
                                    <th>Target Date</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todos.map(
                                        todo => 
                                            <tr key={todo.id}>
                                                <td>{todo.description}</td>
                                                <td>{todo.done.toString()}</td>
                                                <td>{moment(todo.targetDate.toString()).format('YYYY-MM-DD')}</td>
                                                <td><button className="btn btn-success" onClick={() => this.updateClicked(todo.id)}>Update</button></td>
                                                <td><button className="btn btn-warning" onClick={() => this.deleteToDoClicked(todo.id)}>Delete</button></td>
                                            </tr>
                                        
                                    )
                                }                           
                            </tbody>
                        </table>
                        <div className="row">
                                <button className="btn btn-success" onClick={() => this.addClicked()}>Add</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ListTodosComponent;