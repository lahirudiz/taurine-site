import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
            <a className="navbar-brand" to="/">Taurine</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href='/'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/about'>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/services'>Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/portfolio'>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;