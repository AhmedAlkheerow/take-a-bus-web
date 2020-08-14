import React, { useEffect } from 'react';
import Logo from '../assets/logo-200.png';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { usersRef, auth } from './../api/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './../actions';

export default function Navbar({ onRegisterClick, onLoginClick }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      console.log(authUser);
      if (authUser) {
        try {
          const userData = await usersRef.doc(authUser.uid).get();
          const user = userData.data();
          // const user = { isSigned: true, uid: authUser.uid };
          user.isSigned = true;
          dispatch(setUser(user));
        } catch (e) {
          console.log(e.message);
          dispatch(setUser({ isSigned: false }));
        }
      } else {
        dispatch(setUser({ isSigned: false }));
      }
    });
  }, []);
  const onLogout = () => {
    console.log('logout');
    auth.signOut();
  };
  return (
    <header className="shadow-sm py-1">
      <nav className="flex items-center">
        <div className="flex items-center flex-shrink-0 text-white ">
          <Link to="/">
            <img src={Logo} className="w-20 mx-6" alt="logo" />
          </Link>
        </div>
        <div className="flex justify-between flex-grow">
          <NavMenu />
          {user.isSigned && (
            <div className="mx-6">
              <a href="#me" className="btn primary focus:outline-none">
                Welcome {user.firstName}
              </a>
              <button
                className="btn secondary ml-2 focus:outline-none"
                onClick={onLogout}
              >
                Log out
              </button>
            </div>
          )}
          {!user.isSigned && (
            <div className="mx-6">
              <a href="#signin">
                <button
                  className="btn secondary focus:outline-none"
                  onClick={onLoginClick}
                >
                  Log in
                </button>
              </a>
              <a href="#signup">
                <button
                  className="btn primary ml-2 focus:outline-none"
                  onClick={onRegisterClick}
                >
                  Register
                </button>
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
const NavMenu = () => (
  <div className="text-sm flex flex-col md:flex-row justify-between mr-auto">
    <Link to="/" className="nav-link">
      Home
    </Link>
    <Link to="/about" className="nav-link">
      About
    </Link>
    <Link to="/routes" className="nav-link">
      Route List
    </Link>
    <Link to="/me/history" className="nav-link">
      History
    </Link>
    <Link to="/me/favorite" className="nav-link">
      Favorite Bus
    </Link>
  </div>
);
Navbar.propTypes = {
  onLoginClick: PropTypes.func,
  onRegisterClick: PropTypes.func,
};
