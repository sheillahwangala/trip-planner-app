import React from "react"
import { NavLink } from "react-router-dom";
import "./navbar.css"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-info px-5">
            <NavLink to='/' className="navbar-brand" >MOMENTS</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <NavLink to='/' className="nav-link"><h3>Home</h3> <span className="sr-only"></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/trips' className="nav-link" ><h3>My Trips</h3></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/signin' className="nav-link"><h3>Sign In</h3></NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;