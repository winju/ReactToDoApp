import React, {Component} from 'react';

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

export default TodosComponent;