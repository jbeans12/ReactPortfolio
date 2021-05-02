import React from "react";
import "./style.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#aboutme">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mywork">My Work</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Contact Info
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#email">Email</a>
                    <a className="dropdown-item" href="#linkedIn">LinkedIn</a>
                    <a className="dropdown-item" href="#github">GitHub</a>
                  </div>
                </li>
              </ul>
            </div>
        </nav>
    )
}

export default Navbar;

