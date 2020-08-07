import React, { useState } from 'react';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useHistory } from 'react-router-dom';
const Layout = ({ children }) => {
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showModal, toggleModal] = useState(false);

  const showLoginF = () => {
    setShowLogin(true);
    showModalF();
  };

  const showRegisterF = () => {
    setShowRegister(true);
    showModalF();
  };

  const showModalF = () => {
    toggleModal(true);
  };

  const closeModal = () => {
    toggleModal(false);
    setShowRegister(false);
    setShowLogin(false);
    history.goBack();
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="shadow-md z-10">
          <Navbar onLoginClick={showLoginF} onRegisterClick={showRegisterF} />
        </div>
        <main className="flex-grow overflow-auto">{children}</main>
      </div>
      {showModal && (
        <Modal onClickOutside={closeModal}>
          {showLogin && <SignIn onClose={closeModal} />}
          {showRegister && <SignUp onClose={closeModal} />}
        </Modal>
      )}
    </>
  );
};
export default Layout;
export const Modal = ({ children, onClickOutside }) => (
  <div className="z-50 fixed inset-0">
    <div
      onClick={onClickOutside}
      className="absolute opacity-25 inset-0 bg-black"
    ></div>
    <div className="flex justify-center mx-auto w-3/5 outline-none focus:outline-none">
      {children}
    </div>
  </div>
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
  onClickOutside: PropTypes.func,
};
