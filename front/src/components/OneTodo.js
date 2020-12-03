import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

function OneTodo(props) {
    const [todo, setTodo] =useState('')
    const { params } = props.match;
    let getOneTodo = () => {
         axios.get(`http://localhost:4000/api/v1/todos/${params.id}`)
        .then(({ data }) => {
            setTodo(data.title)
          }).catch(err=>{console.log(err);});
        }

    useEffect(()=>{
        getOneTodo()
        },[])

    async function updateTodo(data){
        axios.put(`http://localhost:4000/api/v1/todos/${params.id}`, {data})
        }

    function handleChange(e){
        setTodo(e.target.value)
        }

    function handleSubmit(e){
        e.preventDefault();
        let newTodo = updateTodo(todo);
        setTodo(newTodo.title)
        }
        
    return (
        <div>
            <h1>Title: {todo}</h1>
            <form onSubmit={handleSubmit}>
                <p>Change title:</p>
                <input type='text' value={todo} onChange={handleChange}/>
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default OneTodo
