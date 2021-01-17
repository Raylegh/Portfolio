import './Navbar.css';
import React from 'react';

function Navbar(props){
    return (
        <nav className="nav-bar">
            <NavTittle/>
            <NavObjects>
                <Navitem tittle='Projects'/>
                <Navitem tittle='About'/>
                <Navitem tittle='Contact'/>
            </NavObjects>
            <NavMenu/>           
        </nav>
    )
}

function NavTittle(){
    return(
        <div className="navbar-left">
            <div className="navbar-tittle">
                <h4>Cristina Blanco</h4>
            </div>
            <div className="navbar-logo">
                <img className="navbar-logo-img" src="/images/logo.png" alt=""/>
            </div>
        </div>
    )
}

function NavObjects(props){
    return(
        <div className="navbar-right">
            <ul className="nav-links">
                {props.children}
            </ul>
        </div>   
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

function NavMenu(){
    return(
        <div className="nav-menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    )
}

export default Navbar
