import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Image from '../../images/Project3_home.jpg';
import Logo from '../Logo/bug_icon.png';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
			<div className="logo-div">
			<img src={Logo} className="logo"></img>
			</div>
        </Link>
        <div>
			<ul className="navbar-nav">
				<li className="nav-item">
				<Link
					to="/"
					className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
					>
					home
				</Link>
				</li>
				<li className="nav-item">
				<Link
					to="/see"
					className={window.location.pathname === "/see" ? "nav-link active" : "nav-link"}
				>
					see
				</Link>
				</li>
				<li className="nav-item">
				<Link
					to="/do"
					className={window.location.pathname === "/do" ? "nav-link active" : "nav-link"}
				>
					do
				</Link>
				</li>
				<li className="nav-item">
				<Link
					to="/eat"
					className={window.location.pathname === "/eat" ? "nav-link active" : "nav-link"}
				>
					eat
				</Link>
				</li>
			</ul>
        </div>
    </nav>
  );
}

export default Navbar;