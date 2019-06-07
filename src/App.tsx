import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import AboutMe from './aboutMe';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AboutMe attr="Hello" />
        <Button>Button!</Button>
        <Router>
          <Link to="/AboutMe">AboutM</Link>
          <Route path="/AboutMe" component={AboutMe}></Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
