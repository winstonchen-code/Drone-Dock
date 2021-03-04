import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin'
import 'bootstrap/dist/css/bootstrap.css';
import VideoHome from './components/VideoHome/VideoHome'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import FootageLogs from './components/FootageLogs/FootageLogs';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [footageLogs, setFootageLogs] = useState([]);

  console.log(user);

  useEffect(() => {
    fetch("http://localhost:3000/me")
      .then((r) => r.json())
      .then((user) => {
        setUser(user);
        setFootageLogs(user.footage_logs)
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

          {/* <Route path="/footagelogs/:id">
            <VideoHome />
          </Route> */}
          <Route exact path="/footagelogs/:id" component={VideoHome} exact />
          <Route path="/profile">
            {user ? ( <Profile user={user} setUser={setUser} /> ) : ( <h1> You must be logged in to view this page! </h1> )}
          </Route>
          <Route path="/footagelogs">
            {user ? ( <FootageLogs user={user} footageLogs={footageLogs} setFootageLogs={setFootageLogs}  /> ) : ( <h1> You must be logged in to view this page! </h1> )}
          </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
