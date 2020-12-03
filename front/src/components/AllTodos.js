import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import Todo from './Todo'

async function addTodo(title){
    axios.post("http://localhost:4000/api/v1/todos", {title})
  }
   
function AllTodos() {
    useEffect(()=>{
        getAllTodos()
       },[])
    
      const [todoArr, setTodoArr] = useState([])
      const [title, setTitle] = useState('')
    
      function getAllTodos(){
        axios.get("http://localhost:4000/api/v1/todos").then(({ data }) => {
            console.log(data);
          setTodoArr(data)
        }).catch(err=>{console.log(err);});
      }
    
      function handleChange(e){
        setTitle(e.target.value)
      }
    
      function handleSubmit(e){
        console.log(title, 'handleSubmit')
        e.preventDefault();
        addTodo(title);
        getAllTodos();
      }

    return (
        <div>
            <div>
                {todoArr.map((todo, ind)=>{
                    console.log(todo)
                    return (<Todo key={ind} title={todo.title} id={todo._id} getAllTodos={getAllTodos}/>)
                })}
            </div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} onChange={handleChange} />
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default AllTodos
