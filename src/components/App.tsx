import React from 'react';
import '../styles/App.css';
import DaysList from './daysList';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { AppBar, Input } from '@material-ui/core';
import CurUVidx from './uvIdx';
import Form from '@material-ui/core';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='mainTitle'>5 Day Weather Forecast</h1>
      </header>
      <DaysList />
      <form>
        <Input className='InputLabel' placeholder='Enter A Zip Code:' />
        <Button color='primary' >Get Weather!</Button>
      </form>
    </div>
  );
}

export default App;
