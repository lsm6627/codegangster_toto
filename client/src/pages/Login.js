import React from 'react';

import Footer from '../Footer';

import './Login.css';

const Login = ({}) => {
  return (
    <section className="loginTodolist__container">
      <div className="loginTodolist__logo">Code Gangsters TodoList</div>
      <div className="loginTodolist__inputField">
        <div className="loginTodolist__inputId">
          <i class="fas fa-user"></i>
          <input className="userId" type="text" />
        </div>

        <div className="loginTodolist__inputPassword">
          <i class="fas fa-unlock-alt"></i>
          <input className="password" type="password" />
        </div>
        <div className="loginTodolist__loginBtnContainer">
          <button className="loginBtn">Login</button>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
};

export default Login;
