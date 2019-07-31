import React from "react";
import "./jumbotron.css";
// import Image from "../../images/Project3_home.jpg";
// import Home from "../../pages/home";
import { Link } from "react-router-dom";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
    {/* <img src={Image} href={Home} className="home-img" /> */}
      <h3>Bug App</h3>
    </div>
  );
}

export default Jumbotron;