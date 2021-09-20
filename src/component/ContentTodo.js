import React, { useState } from 'react';
import './ContentTodo.css'
import dummy from '../static/dummyData'
import MakeTodo from './MakeTodo';

const ContentTodo = () => {

    const [datas, setDatas] = useState(dummy);

    //setDatas - todo 제거, 생성

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

            {datas.map((todo) => {
                return (
                    <li className="todoList">
                        {/* 각 리스트 항목들 */}
                        <div className="todoDate">{/*D-day표시*/}</div>
                        <div className="todoContent">{/*todo내용표시*/}

                            {todo ? todo.content : "내용이 없습니다."}

                            <span className="todoContent_checkbox">
                                {/*체크박스영역*/}
                                <input type="checkbox">{/*체크박스*/}</input>
                            </span>
                            <span className="todoContent_delete">
                                {/*삭제영역*/}
                                <button
                                    className="todoContent_deleteButton"
                                    onClick={() => deleteTodo(todo.content, todo.id)}
                                >{/*삭제버튼*/}<i className="far fa-trash-alt"></i></button>
                            </span>
                        </div>
                    </li>
                )
            })}</div>

    )
}

export default ContentTodo;