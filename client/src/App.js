import { useState, useEffect } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

import TodoList from './pages/TodoList';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import axios from 'axios';

import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  // const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({});
  // const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);
  // console.log('!!!!!cookies', cookies);

  const issueTokens = (token) => {
    // console.log('App.js->accessToken;;;', accessToken);
    axios
      .get('https://localhost:4000/tokenrequest', {
        headers: { authorization: `Bearer ${token}` },
        withCredentials: true
      })
      .then((res) => {
        setUserInfo(res.data.data.userInfo);
        setIsLogin(true);
      })
      .catch((err) => console.log(err));
  };
  // 쿠키여부 체크?
  // 모든 요청마다 토큰확인(서버에서확인)?
  // 처음에 토큰확인부터
  // 유즈이펙트 [] 처음 마운트
  useEffect(() => {
    issueTokens();
  }, []);

  const loginHandler = (token) => {
    issueTokens(token.data);
  };

  const logoutHandler = () => {
    axios
      .get('https://localhost:4000/logout', { withCredentials: true })
      .then((res) => {
        setUserInfo({});
        setIsLogin(false);
      });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {isLogin ? (
            <Route exact path="/">
              <TodoList
                // accessToken={accessToken}
                userInfo={userInfo}
                logoutHandler={logoutHandler}
              />
            </Route>
          ) : (
            <main>
              <section className="features">
                <Route exact path="/">
                  <Login loginHandler={loginHandler} setIsLogin={setIsLogin} />
                </Route>
                <Route path="/signup">
                  <SingUp />
                </Route>
              </section>
            </main>
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
