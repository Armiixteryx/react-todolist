import React, {useReducer} from 'react';
import Header from './components/Header';
import Information from './components/Information';
import Todolist from './components/Todolist';
import { Route, Switch } from 'react-router-dom';
import Error from './Error';
import tasksReducer from './components/tasksReducer';

// const testState = [{id: 0, text: 'test', checked: true}];
const initialState = [];

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" render={(props) => <Todolist {...props} tasks={tasks} dispatch={dispatch} />} exact />
        <Route path="/info" component={Information} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
