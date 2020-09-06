import React from 'react';

import RoundType from 'src/models/Round';

interface Props {
  countries: {[key: string]: any};
  currentRound: {};
  currentPlayer: {
    color: string;
    troopsToAdd: number;
  };
  sourceSelection: string;
  addTroopsHandler: (countryKey: string) => void;
  removeTroopsHandler: (countryKey: string) => void;
  selectSourceHandler: (countryKey: string) => void;
  selectTargetHandler: (countryKey: string) => void;
}

const countries = (props: Props) => {
  if (props.countries) {
    //const keys = Object.keys(props.countries);
    //const countryList = keys.map((key) => {
    const countryList = Object.keys(props.countries).map((countryKey) => {
      const country = props.countries[countryKey];
      const playerColor = country.state.player ? country.state.player.color : null;
      const troops = country.state.troops + country.state.newTroops;
      let buttons;

      if (props.currentRound === RoundType.ADD_TROOPS) {
        if (playerColor && props.currentPlayer.color === playerColor) {
          if (country.state.newTroops > 0) {
            buttons = (
              <span>
                <button
                  onClick={() => props.addTroopsHandler(countryKey)}
                  disabled={props.currentPlayer.troopsToAdd <= 0}
                >
                  Agregar
                </button>
                &nbsp;
                <button onClick={() => props.removeTroopsHandler(countryKey)}>
                  Quitar
                </button>
              </span>
            );
          } else {
            buttons = (
              <span>
                <button
                  onClick={() => props.addTroopsHandler(countryKey)}
                  disabled={props.currentPlayer.troopsToAdd <= 0}
                >
                  Agregar
                </button>
                &nbsp;
              </span>
            );
          }
        } else {
          buttons = '';
        }
      } else if (
        props.currentRound === RoundType.ATTACK ||
        props.currentRound === RoundType.MOVE_TROOPS
      ) {
        buttons = (
          <span>
            <button
              onClick={() => props.selectSourceHandler(countryKey)}
              disabled={country.state.player.color !== props.currentPlayer.color}
            >
              Origen
            </button>
            <button
              onClick={() => props.selectTargetHandler(countryKey)}
              disabled={
                !props.sourceSelection || props.sourceSelection === countryKey
              }
            >
              Destino
            </button>
          </span>
        );
      }

      return (
        <li key={country.name}>
          {country.name} - Player: {playerColor || '-'} ({troops}){buttons}
        </li>
      );
    });

    return <ul>{countryList}</ul>;
  } else {
    return <ul></ul>;
  }
};

export default countries;
