import React from "react";
import "./jumbotron.css";
import Image from "../../images/Project3_home.jpg";
import Home from "../../pages/home";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
    <img src={Image} href={Home} className="home_img"></img>
      <h3>Bug App</h3>
    </div>
  );
}

export default Jumbotron;