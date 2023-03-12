import { Routes, Route } from "react-router-dom"
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Signup/Signup";

function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple via-purple-900 to-black">
    <Routes>
      <Route path="/" element={ <Navbar/> } />
      <Route path="/signup" element={ <SignUp/> } />
    </Routes>
  </div>

  );
}

export default App;
