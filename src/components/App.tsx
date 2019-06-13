import React from 'react';
import '../styles/App.css';
import DaysList from './daysList';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { AppBar } from '@material-ui/core';
import CurUVidx from './uvIdx';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='mainTitle'>Weather Forecast: MN</h1>
      </header>
      <DaysList />
      <CurUVidx />
      <AppBar>
        <Button color='primary' >Next Area</Button>

      </AppBar>

    </div>
  );
}

export default App;
