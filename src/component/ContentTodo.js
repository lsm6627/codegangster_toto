import React, { useState } from "react";
import "./ContentTodo.css";
import dummy from "../static/dummyData";

const ContentTodo = ({ datas, setDatas }) => {

    const deleteTodo = (some, deleteId) => {
        console.log(deleteId)
        if (!dummy) {
            alert('todo list가 비어있습니다.')
            return
        }
        const filterTodo = datas.filter((todo, id) => {
            console.log(id)
            return id !== deleteId
        })
        setDatas(filterTodo);

    };
    return (
        <div>
            <ul className="todoLists">
                {datas.map((todo) => {
                    return (
                        <li className="todoList" key={todo.id}>
                            {/* 각 리스트 항목들 */}
                            <div className="todoDate">D - {todo.d_day}</div>
                            <div className="todoContent">
                                {todo.content}


                  <span className="todoContent_checkbox">
                    {/*체크박스영역*/}
                    <input type="checkbox">{/*체크박스*/}</input>
                  </span>
                  <span className="todoContent_delete">
                    {/*삭제영역*/}
                    <button className="todoContent_deleteButton">
                      {/*삭제버튼*/}
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ContentTodo;
