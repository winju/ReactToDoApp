import React, {Component}  from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ToDoDataService from '../../api/todo/ToDoDataService';
import AuthenticationService from './AuthenticationService';


class TodosComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            id: this.props.match.params.id,
            description : '',    
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
    }

    componentDidMount(){

        if(this.state.id === -1){
            return 
        }
        ToDoDataService.retreiveSpecificTodo(AuthenticationService.getLoggeInUser(), this.state.id)
        .then((response)=>{
            
        console.log('The response coming back is ',response.data )
            this.setState({
                description : response.data.description,
                targetDate : moment(response.data.targetDate).format('YYYY-MM-DD')
            })
        })
    }
    
    submit = (values) => {

        let username = AuthenticationService.getLoggeInUser();
        let todo = {
            id : this.state.id, 
            description : values.description, 
            targetDate : values.targetDate
        }
        if(this.state.id === -1){
            ToDoDataService.createTodo(username,todo)
                .then((response)=>{
                this.props.history.push(`/listTodos`)
                })
            console.log("The values that are being passed are ",values);
        }else{
            ToDoDataService.updateSpecificTodo(username, this.state.id, todo)
                .then((response)=>{
                this.props.history.push(`/listTodos`)
                })
            console.log("The values that are being passed are ",values);
        }
        
    }

    validate = (values) => {
        let errors = {};
        if(!values.description){
            errors.description = 'Enter some description'
        }else if(values.description.length < 5){
            errors.description = 'Enter atleast 5 characters'
        }

        // if(moment(values.targetDate).isValid()){
        //     errors.targetDate = 'Enter a valid date'
        // }
        console.log('The value coming out in targetDate is ',values.targetDate);
        return errors;
    }

    render(){
        let description = this.state.description; // let description, targetDate = this.state
        let targetDate = this.state.targetDate;
        return(
                <>
                
                <div className="container">
                    <h1>Todo</h1>
                    <Formik
                        initialValues={{
                            description : description,//description, targetDate
                            targetDate : targetDate,
                        }}
                        onSubmit = {this.submit}
                        validate = {this.validate}
                        enableReinitialize = {true}
                    >
                        {
                            (props) => {
                                    return ( 
                                        <>
                                        <Form>
                                            <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                            <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                                            
                                            <fieldset className="form-group">
                                                <label className="float-left">Description</label>
                                                <Field className="form-control" type="text" name="description"></Field>
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <label className="float-left">Target Date</label>
                                                <Field className="form-control" type="date" name="targetDate"></Field>
                                            </fieldset>
                                            <button className="btn btn-success" type="submit">Save</button>
                                        </Form>
                                        </>
                                    )
                                }
                        }
                    </Formik>
                </div>
                </>
        )
        
    }
}

export default TodosComponent;