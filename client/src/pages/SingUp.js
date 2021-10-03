import React from 'react';

import { useForm } from 'react-hook-form';

import Footer from '../Footer';

import './SingUp.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SingUp = () => {
  const history = useHistory();
  const userSingup = () => {
    axios
      .post('https://localhost:4000/signup', {
        userId: '유저02',
        password: '4321',
        email: 'user02@home.com'
      })
      .then((res) => history.push('/'))
      .catch((err) => console.log(err));
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="loginTodolist__container">
      <div className="loginTodolist__logo">Code Gangsters TodoList Sign Up</div>

      <div className="loginTodolist__inputField">
        <div className="loginTodolist__inputId">
          <i class="fas fa-user"></i>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="userId"
              type="text"
              placeholder="ID"
              name="userId"
              {...register('userId', { pattern: /^[A-Za-z]+$/i, minLength: 6 })}
            />
          </form>
        </div>
        <div className="loginTodolist__inputPassword">
          <i class="fas fa-unlock-alt"></i>
          <input className="password" type="password" placeholder="Password" />
        </div>
        <div className="loginTodolist__verifyPassword">
          <i class="fas fa-lock"></i>
          <input
            className="password"
            type="password"
            placeholder="Verify Password"
          />
        </div>
        <div className="loginTodolist__email">
          <i class="fas fa-envelope-open-text"></i>
          <input className="email" type="email" placeholder="E-Mail" />
        </div>
        {errors.userId && (
          <div className="validation__check__complicatedPassword hide">
            * 아이디는 영문과 숫자 6글자 이상이어야 합니다.
          </div>
        )}
        <div className="validation__check__wrongEmail hide">
          * 올바른 형식의 이메일을 입력해 주세요.
        </div>
        <div className="validation__check__wrongPassword hide">
          * 비밀번호는 6글자 이상, 영문, 숫자 조합이어야 합니다.
        </div>
        <div className="validation__check__matchIdPassword hide">
          * 비밀번호와 아이디는 같을 수 없습니다.
        </div>
        <div className="validation__check__notMatchPassword hide">
          * 비밀번호가 일치하지 않습니다.
        </div>
        <div className="loginTodolist__BtnContainer">
          <button
            type="submit"
            className="singUpBtn"
            onClick={() => {
              userSingup();
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
};

export default SingUp;
