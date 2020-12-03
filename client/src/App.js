import logo from './logo.svg';
import axios from 'axios';
import { Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToDo from './components/todos/AddToDo';
import ToDoList from './components/todos/ToDoList'
import Navbar from './components/navbar/Navbar'
import ToDoDetails from './components/todos/ToDoDetails'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-12">
          <h1 style={{ marginBottom: '45px'}}>ToDo App</h1>
        </div>
        {/* <Navbar/> */}
        <Switch>
          <Route exact path="/" component={ToDoList} />
          <Route exact path="/todos" component={ToDoList} />
          <Route exact path="/todos/:id" component={ToDoDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
