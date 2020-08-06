import React, { useState } from 'react';
import Navbar from './Navbar';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowLogin = (bool) => {
    setShowLogin(bool);
  };
  const handleShowRegister = (bool) => {
    setShowRegister(bool);
  };

  return (
    <>
      <Navbar
        handleShowLogin={handleShowLogin}
        handleShowRegister={handleShowRegister}
      />
      {showLogin && <LoginModal handleShowLogin={handleShowLogin} />}
      {showRegister && (
        <RegisterModal handleShowRegister={handleShowRegister} />
      )}
      <main>{children}</main>
    </>
  );
};
export default Layout;
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
