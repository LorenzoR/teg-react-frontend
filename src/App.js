import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import LayoutWrapper from './LayoutWrapper';
import NewGame from './NewGame';
import Main from './Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/newGame" component={NewGame} />
        <Route path="/game/:gameId" component={LayoutWrapper} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
