import React, { useState } from "react";
import dummyData from "../static/dummyData";
import "./Filterbar.css";

const Filterbar = () => {
  const [datas, setDatas] = useState(dummyData);

  const handleChange = (e) => {
    if (e.target.value === "D-day순") {
      const cpDatas = datas.slice();
      const dDaySort = cpDatas.sort((a, b) => a.d_day - b.d_day);
      setDatas(dDaySort);
    }
    if (e.target.value === "생성날짜순") {
      const cpDatas = datas.slice();
      const createdAtSort = cpDatas.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setDatas(createdAtSort);
    }
  };
  const today = new Date();

  return (
    <div className="filterbar__container">
      <div className="filterbar__wrapper">
        <select onChange={handleChange}>
          드롭다운
          <option>--정렬방식 선택--</option>
          <option>D-day순</option>
          <option>생성날짜순</option>
        </select>
        <div>
          {today.getFullYear()}년{today.getMonth() + 1}월{today.getDate()}일
        </div>
      </div>
      <div>
        {datas.map((el) => {
          return <p key={el.id}>{el.content}</p>;
        })}
      </div>
    </div>
  );
};

export default Filterbar;
