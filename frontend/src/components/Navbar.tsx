import React from "react";
import './Navbar.css';
import './Reusable.css'
import {RiMenu3Line} from "react-icons/ri";
import Logo from '../imgs/logo192white.png'

function Navbar() {
    return (
        <div className="navbar">

            <div className="logo-container" >
                <a href="#">
                <img src={Logo} style={{width: '95px', height: '95px'}}/>
                </a>
            </div>

            <button className="nav-menu-switch-mobile clean-button">
                <RiMenu3Line className="clean-button button-icon"/>
            </button>

            <div className="nav-buttons-container">
                <a href="#" className="nav-button clean-button">testbutton</a>
                <a href="#" className="nav-button clean-button">testbutton</a>
                <a href="#" className="nav-button clean-button">testbutton</a>
                <a href="#" className="nav-button clean-button">testbutton</a>
            </div>

        </div>
    )
}

export default Navbar