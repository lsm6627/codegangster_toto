import './App.css';
import {BrowserRouter, Switch} from "react-router-dom";

function App() {
  return ( 
      <BrowserRouter>
    <div className='App'>
        <Header />
      <main>
        <Filterbar/>
        <MakeTodo /> 
        <ContentTodo/>
        <CountClear/>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
