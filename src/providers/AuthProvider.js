import React, { createContext, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../api/firebase';

const initialState = {
  user: null,
  inProgress: false,
};

const Context = createContext(initialState);
export default Context;

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [inProgress, setInProgress] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((a) => {
      setUser(a);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const raiseError = (error) => {
    setError(new AuthError(error));
    setTimeout(() => {
      setError(null);
    }, 30000);
  };

  const signIn = useCallback((email, password) => {
    setInProgress(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setInProgress(false);
      })
      .catch((err) => {
        setInProgress(false);
        raiseError(err);
      });
  }, []);

  const googleSignIn = useCallback(() => {}, []);

  const signUp = useCallback((email, password, name) => {
    setInProgress(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((creds) => {
        creds.user.updateProfile({ displayName: name }).then(() => {
          setInProgress(false);
        });
      })
      .catch((err) => {
        setInProgress(false);
        raiseError(err);
      });
  }, []);

  const googleSignUp = useCallback(() => {}, []);

  const logOut = useCallback(() => {
    auth.signOut();
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        authInProgress: inProgress,
        authError: error,
        signUp,
        signIn,
        googleSignIn,
        googleSignUp,
        logOut,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export function MockProvider(props) {
  const [user] = useState(null);
  return (
    <Context.Provider
      value={{
        user,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

MockProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

class AuthError extends Error {
  constructor(error) {
    super('Error');
    switch (error.code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-email':
        this.message += ': invalid email or password';
        break;

      case 'auth/user-disabled':
        this.message += ': your account has been disabled';
        break;

      case 'auth/email-already-in-use':
        this.message += ': this email is already registered, please login';
        break;

      case 'auth/weak-password':
        this.message +=
          ": the password you've chosen is weak. Choose a strong one";
        break;

      default:
        this.message += ': an error occured';
    }
  }
}
