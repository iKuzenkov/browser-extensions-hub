import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import AutoClicker from "./components/auto-clicker/AutoClicker";
import ToDo from "./components/to-do/ToDo";
import Error404 from "./components/error/Error404";

const dataHome = {
  autoClickName:
    "Safe Auto Clicker — Smart Mouse Click Automation for Any Website",
  toDoName: "Advanced To-Do List",
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={dataHome} />} />
        <Route path="/auto-clicker" element={<AutoClicker />} />
        <Route path="/to-do" element={<ToDo />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
