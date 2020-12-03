import React, { Component } from 'react'
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import EditToDo from './EditToDo';

export default class ToDoDetails extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getSingleToDo();
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
          return;
        };
    }

    getSingleToDo = () => {
        const { params } = this.props.match;
        axios
          .get(`http://localhost:4000/api/v1/todos/${params.id}`)
          .then(responseFromApi => {
            const theToDo = responseFromApi.data;
            this.setState(theToDo);
          })
          .catch(err => {
            console.log(err);
          });
    };

    renderEditForm = () => {
        if(!this.state.title){
          this.getSingleToDo();
        } else {
        //{...props} => so we can have 'this.props.history' in Edit.js
          return <EditToDo theToDo={this.state} getTheToDo={this.getSingleToDo} {...this.props} />
        }
    }



    render() {
        return (
            <div className="row todo-list d-flex mx-auto">
                <div className="col-12">
                    <h3>{this.state.title}</h3>
                    <p>{this.state.body}</p>
                </div>
                <div className="col-12">
                    {this.renderEditForm()}
                </div>
                <div className="col-12">
                    
                </div>
                <div className="col-12" style={{marginTop: '15px'}}>
                <Link to={"/todos"}>Back to ToDos</Link> 
                </div>
            </div>
        )
    }
}
