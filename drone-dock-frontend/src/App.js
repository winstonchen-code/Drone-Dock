import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin'
import 'bootstrap/dist/css/bootstrap.css';
import VideoHome from './components/VideoHome/VideoHome'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import Locations from './components/Locations/Locations';

function App() {
  const [user, setUser] = useState(null);

  console.log(user);

  useEffect(() => {
    fetch("http://localhost:3000/me")
      .then((r) => r.json())
      .then((user) => {
        setUser(user);
      })
  }, []);

  return (
    <Router>
      <Navbar user={user}/>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin">
            <SigninPage setUser={setUser} />
          </Route>
          {/* <Route path="/signin" component={SigninPage} exact /> */}
          <Route path="/videos">
            <VideoHome user={user} />
          </Route>
          {/* <Route path="/videos" component={VideoHome} exact /> */}
          <Route path="/profile">
            {user ? ( <Profile user={user} setUser={setUser} /> ) : ( <h1> You must be logged in to view this page! </h1> )}
          </Route>
          <Route path="/locations">
            {user ? ( <Locations user={user} /> ) : ( <h1> You must be logged in to view this page! </h1> )}
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
