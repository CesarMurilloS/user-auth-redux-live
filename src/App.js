import React from 'react';
import logo from './logo.svg';
import './App.css';

import {auth, provider} from './firebase.js';

import {useDispatch, useSelector} from 'react-redux';

import {setSignIn, setSignOut, selectUser}  from './features/userSlice';
import useUser from './features/helpers/useUser';

function App() {
  const user = useSelector(selectUser);

  const {
    handleSignIn,
    handleSignOut
  } = useUser() 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        User: {user?.displayName}
        {
          user ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : 
          (
            <button onClick={handleSignIn}>Sign In</button>
          )
        }
      </header>
    </div>
  );
}

export default App;
