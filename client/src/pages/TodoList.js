import React, { useState } from 'react';
import './TodoList.css';

import Header from '../Header';
import Filterbar from '../component/Filterbar';
import MakeTodo from '../component/MakeTodo';
import CountClear from '../component/CountClear';
import ContentTodo from '../component/ContentTodo';
import Footer from '../Footer';
import dummy from '../static/dummyData';

const TodoList = ({}) => {
  const [isClear, setIsClear] = useState(false);
  const [datas, setDatas] = useState(dummy);

  const handleClear = () => {
    setIsClear(true);
    setDatas([]);
  };

  return (
    <React.Fragment>
      <div>
        <Header />
        <Filterbar datas={datas} setDatas={setDatas} />
        <MakeTodo datas={datas} setDatas={setDatas} />
        <CountClear
          datas={datas}
          setDatas={setDatas}
          isClear={isClear}
          handleClear={handleClear}
        />
        <div className="listPart">
          <ContentTodo datas={datas} setDatas={setDatas} />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default TodoList;
