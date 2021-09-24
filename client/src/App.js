import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import TodoList from './pages/TodoList';
import Login from './pages/Login';
import SingUp from './pages/SingUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <section className="features">
            <Switch>
              <Route exact path="/">
                <TodoList />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SingUp />
              </Route>
            </Switch>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
