import React from 'react';

import { Link } from 'react-router-dom';

import Footer from '../Footer';

import './Login.css';
import axios from 'axios';

const Login = ({ loginHandler }) => {
  const userLogin = () => {
    axios
      .post(
        'https://localhost:4000/login',
        // { userId: 'lsm', password: 'qwer' },
        { userId: '사범기', password: '4321' },
        // { userId: '유저02', password: '4321' },
        { withCredentials: true }
      )
      .then((res) => loginHandler(res.data))
      .catch((err) => console.log(err));
  };

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
        {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
        <div className="loginTodolist__BtnContainer">
          <button
            type="submit"
            className="loginBtn"
            onClick={() => {
              userLogin();
            }}
          >
            Login
          </button>
        </div>
        {/* </Link> */}
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <div className="loginTodolist__BtnContainer">
            <button className="singUpBtn">Sign Up</button>
          </div>
        </Link>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
};

export default Login;
