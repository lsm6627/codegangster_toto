import React from 'react';
import {useState} from 'react';
import './MakeTodo.css';
import dummyTodos from '../static/dummyData';
import DatePicker from "react-datepicker";



const MakeTodo = () => {
    const[date, setDate] = useState("")
    const[message, setMessage] = useState("")
    const[todoList, settodoList] = useState([...dummyTodos]);
    
    // const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    // const ExampleCustomInput = ({value, onClick}) => (
    //     <button className="example-custom-input" onClick={onClick}>
    //         {value}
    //     </button>
    //     )
    // }
  

const addTodoClick = (event) => {
    console.log("확인")
    const todo = {};
    todo.id = 6;
    todo.d_day = 10;
    todo.content = message;
    todo.check = false;
    todo.createdAt = '2019-02-25T16:17:27.000Z';
    todo.updatedAt = '2019-02-25T16:17:27.000Z';

    settodoList([...todoList, todo]);
    setMessage("");
}

const handleChangeMsg = (event) => {
    setMessage(event.target.value);
}

    return (
        <div>
        <DatePicker
        className="MakeTodo_datepicker"
        selected = {startDate}
        onChange = {(date) => setStartDate(date)}
        // customInput = {<ExampleCustomInput />}
        >
        </DatePicker>

        <input
        className="MakeTodo_input"
        type="text"
        value={message}
        onChange={handleChangeMsg}
        placeholder="일정을 입력하세요">

        </input>

        <button 
        className="MakeTodo_submit"
        onclick={addTodoClick}>할일 추가
        </button>

        </div>
    )
}

export default MakeTodo;