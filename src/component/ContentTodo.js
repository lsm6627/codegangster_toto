import React, { useState } from "react";
import "./ContentTodo.css";

const ContentTodo = ({ datas, setDatas }) => {

    const [isChecked, setIsChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState(new Set());

    const checkHandler = ({ target }) => {
        console.log(target)
        setIsChecked(!isChecked);
        checkedItemHandler(target.parentNode, target.value, target.checked);
    };

    const checkedItemHandler = (box, id, isChecked) => {
        if(isChecked) {
            checkedItems.add(id);
            setCheckedItems(checkedItems)
            box.style.backgroundColor = "#F6cB44"; 
        } else if(!isChecked && checkedItems.has(id)) {
            checkedItems.delete(id);
            setCheckedItems(checkedItems);
            box.style.backgroundColor = "#fff";
        }
        return checkedItems;
    }

    const deleteTodo = (some, deleteId) => {
        const filterTodo = datas.filter((todo) => {
            return todo.id !== deleteId
        })
        setDatas(filterTodo);
    };

    return (
        <div className="todo_Container">
            <ul className="todoLists">
                {datas.map((todo) => {
                    return (
                        <li className="todoList" key={todo.id}>
                            {/* 각 리스트 항목들 */}
                            <div className="todoMenu">
                                <div className="todoDate">D - {todo.d_day}</div>
                                <div className="createTodo">{new Date(todo.createdAt).toLocaleDateString('ko-kr')}</div>
                                <div className="buttons">
                                    <span className="todoContent_checkbox">
                                        <div className="checkbox_group">
                                            <input type="checkbox" id="check" onChange={(e) => checkHandler(e)} />
                                        </div>
                                    </span>
                                    <span className="todoContent_delete">
                                        <button className="todoContent_deleteButton"
                                            onClick={() => deleteTodo(todo.content, todo.id)}
                                        >
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>

                            <div className="todoContent">
                                {todo.content}
                            </div>

                        </li >
                    );
                })
                }
            </ul >
        </div >
    );
};

export default ContentTodo;
