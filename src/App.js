import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LayoutWrapper from './LayoutWrapper';

function App() {
  return (
    <Router>
      <Route path="/" component={LayoutWrapper}>
      </Route>
    </Router>
  );
}

export default App;
