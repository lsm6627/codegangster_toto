import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import TodoList from "./pages/TodoList";
import Login from "./pages/Login";

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
            </Switch>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
