import React, { useState } from 'react';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Layout = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showModal, toggleModal] = useState(false);

  const handleShowLogin = (bool) => {
    toggleModal(bool);
    setShowLogin(bool);
  };

  const handleShowRegister = (bool) => {
    toggleModal(bool);
    setShowRegister(bool);
  };

  return (
    <>
      <Navbar
        handleShowLogin={handleShowLogin}
        handleShowRegister={handleShowRegister}
      />

      {showModal && (
        <Modal>
          {showLogin && <SignIn handleClose={() => handleShowLogin(false)} />}
          {showRegister && (
            <SignUp handleClose={() => handleShowRegister(false)} />
          )}
        </Modal>
      )}
      <main>{children}</main>
    </>
  );
};
export default Layout;
const Modal = ({ children }) => (
  <>
    <div className="flex justify-center fixed mx-auto w-3/5 inset-0 z-50 outline-none focus:outline-none">
      {children}
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
