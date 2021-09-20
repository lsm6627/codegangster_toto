import React from "react";
import { useState } from "react";
import "./MakeTodo.css";
// import ContentTodo from "./ContentTodo";
// import dummyTodos from "../static/dummyData";
import shortid from "shortid";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

registerLocale("ko", ko);

const MakeTodo = ({ datas, setDatas }) => {
  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const today = new Date();
  const dday = startDate;
  const gap = dday - today.getTime();
  const result = Math.ceil(gap / (1000 * 60 * 60 * 24));

  const addTodoClick = (event) => {
    const todo = {
      id: shortid(),
      d_day: result,
      content: message,
      check: false,
      createdAt: new Date().toLocaleDateString("ko-KR"),
      updatedAt: new Date().toLocaleDateString("ko-KR"),
    };

    setDatas([...datas, todo]);
    setMessage("");

  };

  const handleChangeMsg = (event) => {
    setMessage(event.target.value);
  };


  return (
    <div className="Container">
      <div className="MakeTodo_input">
      <i class="fas fa-pencil-alt"></i>
        <span className="MakeTodo_title">MAKE TODO!</span>
        <i class="fas fa-calendar-day"></i>
        <DatePicker

          className="MakeTodo_input__calendar"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
          minDate={new Date()}
        >
        </DatePicker>


        <div className="MakeTodo_input--message">
          <input 
            className="input_message"
            type="text"
            value={message}
            onChange={handleChangeMsg}
            placeholder="일정을 입력하세요"
            ></input>
        </div>

        <button className="MakeTodo_input--submit" onClick={addTodoClick}>
          <i className="fas fa-plus"></i>
        </button>
    </div>

    </div>
  );
};

export default MakeTodo;
