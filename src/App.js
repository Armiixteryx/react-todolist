import React, {useReducer, useEffect} from 'react';
import Header from './components/Header';
import Information from './components/Information';
import Todolist from './components/Todolist';
import { Route, Switch } from 'react-router-dom';
import Error from './Error';
import tasksReducer from './components/tasksReducer';
// import { getStoredState } from './components/localStorage';

// const testState = [{id: 0, text: 'test', checked: true}];
// const initialState = getStoredState() || [];
const BACKEND = process.env.REACT_APP_BACKEND_LOCATION;
const initialState = [];

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);

  //This fills the tasks from the backend
  useEffect(() => {
    fetch(BACKEND)
      .then(res => res.json())
      .then(data => dispatch({
        type: 'SET_ALL',
        set: data
      }));
  }, [])

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
