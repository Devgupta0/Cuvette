import React from "react";
import {Link} from "react-router-dom";


import './App.css';
function Navbar(){
    
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand"><img className="img" src="./../images/logo.png" alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    
                    </ul>
                <form className="d-flex form-inline">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link Listing" to="/">My Listing</Link>
                    </li>
                    <li className="nav-item">
                    <Link to ="/" className="nav-link notify"><i className="fa fa-bell "></i></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link user" style={{color:"orange"}}><i className="fa fa-user-circle "></i></Link>
                    </li>
                    
                    </ul>
                </form>
                </div>
            </div>
            </nav>
           {/* <nav className="navbar navbar-light  justify-content-between">
            <Link to="/" className="navbar-brand"><img className="img" src="./../images/logo.png" alt="logo"/></Link>
            <form className="form-inline">
                <Link to="/" className="Listing">My Listing</Link>
                <Link to ="/" className="notify"><i className="fa fa-bell"></i></Link>
                <Link to="/" className="user"><i className="fa fa-user-circle"></i></Link>
                
            </form>
            </nav> */}
        
        </>
    );
}

export default Navbar;