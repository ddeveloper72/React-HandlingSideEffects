import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  // setup a use effect function to check is user is logged in
  useEffect(() => {
    // check is user is logged in.
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    // running from with useEffect prevents infinite loop
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
    // empty array, so no changes are recorded, to prompt re-running useEffects
  }, []);


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    // save login status to local storage
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // removed isLoggedIn key on logout
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
