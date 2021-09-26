import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Footer from '../Footer';

import './Login.css';

const Login = ({ loginHandler }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <section className="loginTodolist__container">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="loginTodolist__logo">Code Gangsters TodoList</div>
        <div className="loginTodolist__inputField">
          <div className="loginTodolist__inputId">
            <i class="fas fa-user"></i>
            <input
              className="userId"
              type="text"
              {...register('userId', {
                minLength: {
                  value: 5,
                  message: '안녕 디지몬?'
                }
              })}
            />
          </div>
          <div className="loginTodolist__inputPassword">
            <i class="fas fa-unlock-alt"></i>
            <input
              className="password"
              type="password"
              {...register('password', {
                minLength: {
                  value: 5,
                  message: '안녕 포켓몬?'
                }
              })}
            />
          </div>
          {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
          <div className="loginTodolist__BtnContainer">
            <button type="submit" className="loginBtn">
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
      </form>
    </section>
  );
};

export default Login;
