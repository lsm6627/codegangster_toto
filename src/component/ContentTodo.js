import React, { useState } from "react";
import "./ContentTodo.css";
import dummy from "../static/dummyData";

const ContentTodo = ({ datas, setDatas }) => {


    const deleteTodo = (some, deleteId) => {
        const filterTodo = datas.filter((todo) => {
            return todo.id !== deleteId
        })
        setDatas(filterTodo);
    };

    return (
        <div>
            {datas.length ?
                (<ul className="todoLists">
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
                                        <button className="todoContent_deleteButton"
                                            onClick={() => deleteTodo(todo.content, todo.id)}
                                        >
                                            {/*삭제버튼*/}
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </span>
                                </div>
                            </li >
                        );
                    })
                    }
                </ul >) : ("할일 없냐?")}
        </div >
    );
};

export default ContentTodo;
