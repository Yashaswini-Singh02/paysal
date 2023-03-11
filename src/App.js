import { Routes, Route } from "react-router-dom"
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Navbar/SignUp";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Navbar/> } />
      <Route path="SignUp" element={ <SignUp/> } />
     
    </Routes>
  </div>

  );
}

export default App;
