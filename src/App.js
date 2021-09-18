import React, { useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import ContentTodo from "./component/ContentTodo";
import CountClear from "./component/CountClear";
import Filterbar from "./component/Filterbar";
import Footer from "./Footer";
import Header from "./Header";
import MakeTodo from "./component/MakeTodo";

import "./App.css";

function App() {
  const [isClear, setIsClear] = useState(false);

  const handleClear = () => {
    setIsClear(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Filterbar />
          <MakeTodo />
          <ContentTodo />
          <CountClear isClear={isClear} handleClear={handleClear} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
