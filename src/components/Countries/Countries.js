import React from 'react';
import PropTypes from 'prop-types';

const RoundType = {
  ATTACK: 'attack',
  MOVE_TROOPS: 'moveTroops',
  ADD_TROOPS: 'addTroops',
};

const countries = props => {
  if (props.countries) {
    //const keys = Object.keys(props.countries);
    //const countryList = keys.map((key) => {
    const countryList = props.countries.map((country) => {
    const player = country.state.player ? country.state.player.name : null;
    const troops = country.state.troops + country.state.newTroops;
    let buttons;

    if (props.currentRound === RoundType.ADD_TROOPS) {
      if (player && props.currentPlayer.name === player) {
        if (country.state.newTroops > 0) {
            buttons = (
            <span>
                <button onClick={() => props.addTroopsHandler(country.name)} disabled={props.currentPlayer.troopsToAdd <= 0}>
                  Agregar
                </button>&nbsp;
                <button onClick={() => props.removeTroopsHandler(country.name)}>
                  Quitar
                </button>
            </span>
            );
        } else {
            buttons = (
            <span>
                <button onClick={() => props.addTroopsHandler(country.name)} disabled={props.currentPlayer.troopsToAdd <= 0}>
                  Agregar
                </button>&nbsp;
            </span>
            );
        }
        } else {
            buttons = '';
        }
    } else if (props.currentRound === RoundType.ATTACK || props.currentRound === RoundType.MOVE_TROOPS) {
        buttons = (
          <span>
            <button onClick={() => props.selectSourceHandler(country.name)} disabled={country.state.player.name !== props.currentPlayer.name}>
              Origen
            </button>
            <button onClick={() => props.selectTargetHandler(country.name)} disabled={!props.sourceSelection || props.sourceSelection === country.name}>
              Destino
            </button>
          </span>
        );
    }

    return (
      <li key={country.name}>
        {country.name} - Player: {player || '-'} ({troops})
        {buttons}
      </li>
    );
});

return (
    <ul>
        {countryList}     
    </ul>
);
    } else {
      return <ul></ul>;
    }
};

countries.propTypes = {
    
};

export default countries;