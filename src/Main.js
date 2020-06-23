import React from 'react';
import { Link } from 'react-router-dom';

const Main = props => {
  return (
    <div>
      <Link to="/newGame">New Game!</Link>
    </div>
  );
};

export default Main;