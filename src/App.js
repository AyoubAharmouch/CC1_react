import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./comp/Navv";
import Cal from "./comp/Cal";
import Slider from "./comp/Slider";
import TodoList from "./comp/Todo";
import Api from "./comp/Api";

import { LangProvider } from "./comp/Langcontext";
import Hause from "./comp/Hause";

function App() {
  return (
    <div className="App">
      <Nav />
      <LangProvider>
        <Routes>
          <Route path="/" element={<Hause />} />
          <Route path="/home" element={<Hause />} />
          <Route path="/calculator" element={<Cal />} />
          <Route path="/Slider" element={<Slider />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/API" element={<Api />} />
        </Routes>
      </LangProvider>
    </div>
  );
}

export default App;
