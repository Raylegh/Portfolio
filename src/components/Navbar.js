import './Navbar.css';
import React, {useState} from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTimes, faBars} from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return(
        <Navtittle>
            <Navitem tittle='Projects'/>
            <Navitem tittle='About'/>
            <Navitem tittle='Contact'/>
        </Navtittle>
    )
}

function Navtittle(props){
    return (
        <nav className="nav-bar">
            <div className="navbar-left">
                <div className="navbar-tittle">
                    <h4>Cristina Blanco</h4>
                </div>
                <div className="navbar-logo">
                    <img className="navbar-logo-img" src="/images/logo.png" alt=""/>
                </div>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">{props.children}</ul>
            </div>
            
        </nav>
    )
}

function Navitem(props){
    return(
        <li className="nav-item">
            <a href="#">
                {props.tittle}
            </a>
        </li>
    )
}

function Navmenu(){
    return(
        <div class="nav-menu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    )
}

export default Navbar
