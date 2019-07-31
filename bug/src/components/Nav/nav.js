import React from "react";
import "./nav.css";
import Home from '../../pages/home';
// import Image from '../../images/Project3_home.jpg';


function Nav() {
  return (
    <div className='home-img'>
    <div className="container">
        <img className='logo-img'></img>
      <div className="topnav">
        <a href="#home">home</a>
        <a href="#news">see</a>
        <a href="#contact">do</a>
        <a href="#about">eat</a>
      </div>
    </div>
  </div>
  );
}

export default Nav;