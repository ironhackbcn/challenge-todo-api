import React, { Component } from 'react'
import axios from 'axios'

export default class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", body: "" };
      }

    handleFormSubmit = event => {
    event.preventDefault();
    const title = this.state.title;
    const body = this.state.body;
    axios
        .post("http://localhost:4000/api/v1/todos", { title, body })
        .then(() => {
        // this.props.getData();
        this.setState({ title: "", body: "" });
        })
        .catch(error => console.log(error));
    };

    handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    };



    render() {
        return (
            <div className="container">
                <div className="row  todo-form d-flex mx-auto">
                    <div className="col-12">
                        <h3>Add New</h3>
                        <form onSubmit={this.handleFormSubmit}>
                            <input
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={e => this.handleChange(e)}
                                placeholder="ToDo Title"
                                className="form-control"
                            />
                            <textarea className="form-control"
                                name="body"
                                value={this.state.description}
                                onChange={e => this.handleChange(e)}
                                placeholder="Type your ToDo Description"
                                style={{marginTop:'10px'}}
                            />
                            <input style={{marginTop:'10px'}} className="btn btn-primary" type="submit" value="Create" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}