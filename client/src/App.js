import { useState } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import TodoList from './pages/TodoList';
import Login from './pages/Login';
import SingUp from './pages/SingUp';

import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);
  const issueAccessTokens = () => {};

  const loginHandler = (token) => {};

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {!isLogin ? (
            <main>
              <section className="features">
                <Route path="/login">
                  <Login loginHandler={loginHandler} />
                </Route>
                <Route path="/signup">
                  <SingUp />
                </Route>
              </section>
            </main>
          ) : (
            <Route exact path="/">
              <TodoList />
            </Route>
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
