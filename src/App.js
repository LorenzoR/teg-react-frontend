import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import TegMap from './TegMap';

function App() {
  return (
    <Router>
      <Route path="/" component={TegMap}>
      </Route>
    </Router>
  );
}

export default App;
