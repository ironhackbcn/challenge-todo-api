import React, { Component } from 'react'
import axios from 'axios'

export default class EditToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: this.props.theToDo.title,
          body: this.props.theToDo.body
        };
    }

    handleFormSubmit = event => {
        const title = this.state.title;
        const body = this.state.body;
    
        event.preventDefault();
    
        axios
          .put(`http://localhost:4000/api/v1/todos/${this.props.theToDo._id}`, {
            title,
            body
          })
          .then(() => {
            this.props.getTheToDo();
            // after submitting the form, redirect to '/projects'
            this.props.history.push("/todos");
          })
          .catch(error => console.log(error));
    };

    handleChangeTitle = event => {
        this.setState({
          title: event.target.value
        });
      };
    
      handleChangeBody = event => {
        this.setState({
          body: event.target.value
        });
      };


/*

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

*/

deleteToDo = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:4000/api/v1/todos/${params.id}`)
    .then( () =>{
        this.props.history.push('/todos');

    })
    .catch((err)=>{
        console.log(err)
    })
  }


    render() {
        return (
            <div>
            <hr />
            <h3>Edit ToDo</h3>
            <form onSubmit={this.handleFormSubmit}>
            <div class="form-group">
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={e => this.handleChangeTitle(e)}
                className="form-control"
                placeholder="Title"
              />
              </div>
              <div class="form-group"> 
              <textarea
                name="body"
                value={this.state.body}
                onChange={e => this.handleChangeDesc(e)}
                className="form-control"
                placeholder="ToDo Description"
              />
              </div>
              <input type="submit" className="btn btn-primary" value="Save Changes" />
              <button className="btn btn-danger" style={{marginLeft:'10px'}} onClick={() => this.deleteToDo()}>Delete</button>
            </form>
          </div>
        )
    }
}
