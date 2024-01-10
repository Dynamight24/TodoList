import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Task from "./Task";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import User from "./User";
import Name from "./Name";

function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/user/:id" element={<User/>}/>
        </Routes>
        <Name/>
    </BrowserRouter>
  );
}

export default App;
