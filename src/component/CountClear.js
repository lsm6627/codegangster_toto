import React from 'react';
import './CountClear.css';
import dummyData from '../static/dummyData';

const CountClear = ({ isClear, handleClear }) => {

  return (
    <div >
      {isClear ? <span className="span--remainTodos__zero">남은 할 일: 0</span>
        :<span className="span--remainTodos">남은 할 일: {dummyData.length}</span>}
      <button onClick={handleClear} className="btn--clearAll">Clear All</button>
    </div>

  )
}

export default CountClear;