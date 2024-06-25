// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <header>
        {/* Your header content */}
      </header>
      <main>
        <Routes />
      </main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
}

export default App;
