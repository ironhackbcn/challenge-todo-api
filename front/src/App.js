import './App.css';
import AllTodos from './components/AllTodos';
import OneTodo from './components/OneTodo'
import {Switch, Route} from 'react-router-dom';

function App() {

  return (
    <div>
    <Switch>
      <Route exact path='/' component={AllTodos} />
      <Route exact path ='/:id' component={OneTodo} />
    </Switch>
    </div>
  );
}

export default App;
