import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const Employess = (props) => {
  const bananaSdkInstance = props.bananaSdkInstance;

  const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:8000/employees/");
    console.log(res);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return <div></div>;
};

export default Employess;
