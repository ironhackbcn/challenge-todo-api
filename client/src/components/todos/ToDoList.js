import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import AddToDo from "./AddToDo"

export default class ToDoList extends Component {
    constructor() {
        super();
        this.state = { listOfToDos: [] };
    }

    getAllToDos = () => {
        axios.get(`http://localhost:4000/api/v1/todos`).then(responseFromApi => {
          this.setState({
            listOfToDos: responseFromApi.data
          });
        });
    };

    componentDidMount() {
        this.getAllToDos();
    }

    render() {
        return (
          <>
            <div className="row todo-list d-flex mx-auto">
              {this.state.listOfToDos.map(todo => {
                return (
                  <div className="col-12" key={todo._id}>
                    <Link to={`/todos/${todo._id}`}>
                      <h4>{todo.title}</h4>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="col-12">
              <AddToDo getData={() => this.getAllToDos()} />
              </div>
            </div>
          </>
        )
    }
}
