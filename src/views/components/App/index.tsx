import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from '../../../store';
import LayoutWrapper from '../LayoutWrapper';
import NewGame from '../NewGame';
import Main from '../Main';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/newGame" component={NewGame} />
          <Route path="/game/:gameId" component={LayoutWrapper} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
