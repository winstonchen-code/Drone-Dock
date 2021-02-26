import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin'
import 'bootstrap/dist/css/bootstrap.css';
import VideoHome from './components/VideoHome/VideoHome'

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/videos" component={VideoHome} exact />
      </Switch>
    </Router>
  );
}

export default App;
