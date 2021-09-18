import React from "react";
import { BrowserRouter } from "react-router-dom";

import ContentTodo from "./component/ContentTodo";
import CountClear from "./component/CountClear";
import Filterbar from "./component/Filterbar";
import Footer from "./Footer";
import Header from "./Header";
import MakeTodo from "./component/MakeTodo";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Filterbar />
          <MakeTodo />
          <ContentTodo />
          <CountClear />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
