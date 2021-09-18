import React from 'react';
import './Header.css';

const Header = () => {

  return (
    //* 로고, 계정정보, 로그아웃
      <div className="header--wrapper">
        <span className="header--todo__logo">
          <i class="fas fa-clipboard-list"></i>
        </span>
          <span className="span--Username">유저 이름: kimcoding </span>
          <button className="btn--logout">로그아웃</button>
        </div>
    )
}

export default Header;
