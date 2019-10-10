import Axios from "axios";
import {API_URL, JPA_API_URL} from '../../Constants';

class TodoDataService{
    
    retreiveAllTodos = (name)=>{
        return Axios.get(JPA_API_URL+`users/${name}/todos`);
    }

    retreiveSpecificTodo = (name, id)=>{
        return Axios.get(JPA_API_URL+`users/${name}/todos/${id}`);
    }

    deleteSpecificTodo = (name ,id)=>{
        return Axios.delete(JPA_API_URL+`users/${name}/todos/${id}`);
    }

    updateSpecificTodo = (name ,id, todo)=>{
        return Axios.put(JPA_API_URL+`users/${name}/todos/${id}`, todo);
    }

    createTodo = (name, todo)=>{
        return Axios.post(JPA_API_URL+`users/${name}/todos`, todo);
    }
}

export default new TodoDataService();