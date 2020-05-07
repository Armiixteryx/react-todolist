import React from 'react';
import Header from './components/Header';
import Information from './components/Information';
import Todolist from './components/Todolist';
import { Route, Switch } from 'react-router-dom';
import Error from './Error';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Todolist} exact />
        <Route path="/info" component={Information} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
