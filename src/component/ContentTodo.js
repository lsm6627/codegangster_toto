import React, { useState } from "react";
import "./ContentTodo.css";
import dummy from "../static/dummyData";

const ContentTodo = ({ datas, setDatas }) => {
  const [isChecked, setIsChecked] = useState(false);

  const deleteTodo = (some, deleteId) => {
    const filterTodo = datas.filter((todo) => {
      return todo.id !== deleteId;
    });
    setDatas(filterTodo);
  };

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    if (target.checked) {
      target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].className =
        "checked";
    } else {
      target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].className =
        "unChecked";
    }
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
                <div className="createTodo">
                  {new Date(todo.createdAt).toLocaleDateString("ko-kr")}
                </div>
                <div className="buttons">
                  <span className="todoContent_checkbox">
                    <div className="checkbox_group">
                      <input
                        type="checkbox"
                        id="check"
                        onChange={(e) => {
                          checkHandler(e);
                        }}
                      />
                    </div>
                  </span>
                  <span className="todoContent_delete">
                    <button
                      className="todoContent_deleteButton"
                      onClick={() => deleteTodo(todo.content, todo.id)}
                    >
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </span>
                </div>
              </div>

              <div>{todo.content}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContentTodo;
