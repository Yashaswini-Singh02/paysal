import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Atwork from "../assets/Atwork.jpg";

const Landing = (props) => {
  return (
    <div>
      <Navbar bananaSdkInstance={props.bananaSdkInstance} />
      <div className="flex flex-row mt-20">
       
       
        <div className="mt-10 w-2/3 text-white">
            <p>cygeuhvuewbcuhbwfhbivbyvbydhgvsuvsuvb</p>

          <button class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="Dashboard">Dashboard</Link>
          </button>
        </div>

        <div className=""> <img src={Atwork} width="500" height="200"></img></div>
      </div>

    </div>
  );
};

export default Landing;
