import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './util';

import './assets/styles/styles.scss';
import './assets/styles/card.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;