import React, { useState } from 'react';

const todoContent = ({todo}) => {

   


    return(

        <div>
            <div className="todo" id={todo.id}>
                <div className="todo__d_day">{todo.d_day}</div>
                <div className="todo__content">{todo.content}</div>
                <div className="todo__check">{todo.check}</div>

            </div>
        </div>
        
        
       

    )
}
export default todoContent;