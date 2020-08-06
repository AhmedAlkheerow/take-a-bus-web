import React from 'react';
import Logo from '../assets/logo-200.png';
import PropTypes from 'prop-types';

export default function Navbar({ handleShowRegister, handleShowLogin }) {
  return (
    <header className="shadow-sm py-1">
      <nav className="flex items-center">
        <div className="flex items-center flex-shrink-0 text-white ">
          <a href="/">
            <img src={Logo} className="w-20 mx-6" alt="logo" />
          </a>
        </div>
        <div className="flex justify-between flex-grow">
          <NavMenu className="" />
          <div className="mx-6">
            <button
              className="btn secondary"
              onClick={() => handleShowLogin(true)}
            >
              Log in
            </button>
            <button
              className="btn primary ml-2"
              onClick={() => handleShowRegister(true)}
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

const NavMenu = () => (
  <div className="text-sm flex flex-col md:flex-row justify-between mr-auto">
    <a href="#home" className="nav-link">
      Home
    </a>
    <a href="#about" className="nav-link">
      About
    </a>
    <a href="#route-list" className="nav-link">
      Route List
    </a>
    <a href="#history" className="nav-link">
      History
    </a>
    <a href="#fav" className="nav-link">
      Favorite Bus
    </a>
  </div>
);
Navbar.propTypes = {
  handleShowLogin: PropTypes.func,
  handleShowRegister: PropTypes.func,
};
