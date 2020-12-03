import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

function Todo(props) {
    let handleDelete = ()=>{
        axios.delete(`http://localhost:4000/api/v1/todos/${props.id}`).catch(err=>{console.log(err);});
        props.getAllTodos();
    }
    return (
        <div>
            <Link to={`/${props.id}`}>
            <p>Title: {props.title}</p>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Todo
