import React from 'react';


const ContentTodo = () => {
    return (
        <div>
            <ul className="todoLists">
                <li className="todoList">
                    {/* 각 리스트 항목들 */}
                    <div className="todoDate">{/*D-day표시*/}</div>
                    <div className="todoContent">{/*todo내용표시*/}
                        todo 내용
                        <div className="todoContent_checkbox">
                            {/*체크박스영역*/}
                            <input type="checkbox">{/*체크박스*/}</input>
                        </div>
                        <div className="todoContent_delete">
                            {/*삭제영역*/}
                            <button className="todoContent_deleteButton">{/*삭제버튼*/}<i className="far fa-caret-square-left"></i></button>
                        </div>
                    </div>
                    <li className="todoList">
                        {/* 각 리스트 항목들 */}
                        <div className="todoDate">{/*D-day표시*/}</div>
                        <div className="todoContent">{/*todo내용표시*/}
                            todo 내용2
                            <div className="todoContent_checkbox">
                                {/*체크박스영역*/}
                                <input type="checkbox">{/*체크박스*/}</input>
                            </div>
                            <div className="todoContent_delete">
                                {/*삭제영역*/}
                                <button className="todoContent_deleteButton">{/*삭제버튼*/}<i className="far fa-caret-square-left"></i></button>
                            </div>
                        </div>
                    </li>
                </li>
            </ul>
        </div>
    )
}

export default ContentTodo;