import React, { Component } from 'react';

import Countries from './components/Countries/Countries';
import Map from './components/Map/Map';

const CountriesList = {
  // North America
  CANADA: 'canada',
  YUKON: 'yukon',
  OREGON: 'oregon',
  NEW_YORK: 'newYork',
  ALASKA: 'alaska',
  MEXICO: 'mexico',
  CALIFORNIA: 'california',
  GREENLAND: 'greenland',
  TERRANOVA: 'terranova',
  LABRADOR: 'labrador',
  // South America
  COLOMBIA: 'colombia',
  PERU: 'peru',
  BRASIL: 'brasil',
  ARGENTINA: 'argentina',
  CHILE: 'chile',
  URUGUAY: 'uruguay',
  // Oceania
  AUSTRALIA: 'australia',
  JAVA: 'java',
  SUMATRA: 'sumatra',
  BORNEO: 'borneo',
  // Africa
  SAHARA: 'sahara',
  SUDAFRICA: 'sudafrica',
  MADAGASCAR: 'madagascar',
  ZAIRE: 'zaire',
  ETIOPIA: 'etiopia',
  EGIPTO: 'egipto',
  // Europe
  ICELAND: 'islandia',
  UK: 'gran bretania',
  SPAIN: 'espania',
  ITALY: 'italia',
  FRANCE: 'francia',
  GERMANY: 'alemania',
  POLAND: 'polonia',
  RUSIA: 'rusia',
  SWEDEN: 'suecia',
  // Asia
  ARAL: 'aral',
  TARTARIA: 'tartaria',
  TAIMIR: 'taimir',
  SIBERIA: 'siberia',
  KAMCHATKA: 'kamchatka',
  JAPON: 'japon',
  MONGOLIA: 'mongolia',
  IRAN: 'iran',
  GOBI: 'gobi',
  CHINA: 'china',
  MALASIA: 'malasia',
  INDIA: 'india',
  TURQUIA: 'turquia',
  ISRAEL: 'israel',
  ARABIA: 'arabia',
};

const Continents = {
  AFRICA: {
    name: 'africa',
    bonus: 3,
  },
  EUROPE: {
    name: 'europe',
    bonus: 5,
  },
  SOUTH_AMERICA: {
    name: 'southAmerica',
    bonus: 3,
  },
  NORTH_AMERICA: {
    name: 'northAmerica',
    bonus: 5,
  },
  OCEANIA: {
    name: 'oceania',
    bonus: 2,
  },
  ASIA: {
    name: 'asia',
    bonus: 7,
  },
};

const Fillings = {
  AFRICA: '#fdc782',
  EUROPE: '#f2d8af',
  SOUTH_AMERICA: '#9adf9d',
  NORTH_AMERICA: '#e0b881',
  OCEANIA: '#aec0ba',
  ASIA: '#d6b888'
}

const RoundType = {
  ATTACK: 'attack',
  MOVE_TROOPS: 'moveTroops',
  ADD_TROOPS: 'addTroops',
  GET_CARD: 'getCard',
};

const CardExchange = [
  4,
  7,
  10,
  15,
  20,
];

const CardType = {
  SHIP: 'ship',
  CANNON: 'cannon',
  BALLOON: 'balloon',
  WILDCARD: 'wildcard',
};

const CountryCards = [
  // Ships
  { country: CountriesList.MADAGASCAR, type: CardType.SHIP },
  { country: CountriesList.BORNEO, type: CardType.SHIP },
  { country: CountriesList.ISRAEL, type: CardType.SHIP },
  { country: CountriesList.PERU, type: CardType.SHIP },
  { country: CountriesList.ZAIRE, type: CardType.SHIP },
  { country: CountriesList.ICELAND, type: CardType.SHIP },
  { country: CountriesList.ALASKA, type: CardType.SHIP },
  { country: CountriesList.BRASIL, type: CardType.SHIP },
  { country: CountriesList.SIBERIA, type: CardType.SHIP },
  { country: CountriesList.GERMANY, type: CardType.SHIP },
  { country: CountriesList.TURQUIA, type: CardType.SHIP },
  { country: CountriesList.UK, type: CardType.SHIP },
  { country: CountriesList.MONGOLIA, type: CardType.SHIP },
  { country: CountriesList.CHINA, type: CardType.SHIP },
  { country: CountriesList.SWEDEN, type: CardType.SHIP },
  { country: CountriesList.NEW_YORK, type: CardType.SHIP },
  // Cannons
  { country: CountriesList.ARABIA, type: CardType.CANNON },
  { country: CountriesList.MEXICO, type: CardType.CANNON },
  { country: CountriesList.CALIFORNIA, type: CardType.CANNON },
  { country: CountriesList.CANADA, type: CardType.CANNON },
  { country: CountriesList.ARAL, type: CardType.CANNON },
  { country: CountriesList.JAPON, type: CardType.CANNON },
  { country: CountriesList.TERRANOVA, type: CardType.CANNON },
  { country: CountriesList.SUDAFRICA, type: CardType.CANNON },
  { country: CountriesList.SAHARA, type: CardType.CANNON },
  { country: CountriesList.OREGON, type: CardType.CANNON },
  { country: CountriesList.AUSTRALIA, type: CardType.CANNON },
  { country: CountriesList.LABRADOR, type: CardType.CANNON },
  { country: CountriesList.MALASIA, type: CardType.CANNON },
  { country: CountriesList.POLAND, type: CardType.CANNON },
  { country: CountriesList.TARTARIA, type: CardType.CANNON },
  { country: CountriesList.JAVA, type: CardType.CANNON },
  // Balloons
  { country: CountriesList.SPAIN, type: CardType.BALLOON },
  { country: CountriesList.GREENLAND, type: CardType.BALLOON },
  { country: CountriesList.INDIA, type: CardType.BALLOON },
  { country: CountriesList.RUSIA, type: CardType.BALLOON },
  { country: CountriesList.YUKON, type: CardType.BALLOON },
  { country: CountriesList.EGIPTO, type: CardType.BALLOON },
  { country: CountriesList.KAMCHATKA, type: CardType.BALLOON },
  { country: CountriesList.ETIOPIA, type: CardType.BALLOON },
  { country: CountriesList.IRAN, type: CardType.BALLOON },
  { country: CountriesList.URUGUAY, type: CardType.BALLOON },
  { country: CountriesList.ITALY, type: CardType.BALLOON },
  { country: CountriesList.CHILE, type: CardType.BALLOON },
  { country: CountriesList.GOBI, type: CardType.BALLOON },
  { country: CountriesList.FRANCE, type: CardType.BALLOON },
  { country: CountriesList.SUMATRA, type: CardType.BALLOON },
  { country: CountriesList.COLOMBIA, type: CardType.BALLOON },
  // Wildcards
  { country: CountriesList.ARGENTINA, type: CardType.WILDCARD },
  { country: CountriesList.TAIMIR, type: CardType.WILDCARD },
];

const CardsForExchange = {
  MIN: 3,
  MAX: 5,
};

// List of missions
/*
1. Ocupar África, 5 países de América del Norte y 4 países de Europa.
2. Ocupar América del Sur, 7 países de Europa y 3 países limítrofes entre sí en
cualquier lugar del mapa.
3. Ocupar Asia y 2 países de América del Sur.
4. Ocupar Europa, 4 países de Asia y 2 países de América del Sur.
5. Ocupar América del Norte, 2 países de Oceanía y 4 de Asia.
6. Ocupar 2 países de Oceanía, 2 países de África, 2 países de América del Sur,
3 países de Europa, 4 de América del Norte y 3 de Asia.
7. Ocupar Oceanía, América del Norte y 2 países de Europa.
8. Ocupar América del Sur, África y 4 países de Asia.
9. Ocupar Oceanía, África y 5 países de América del Norte.
10. Destruir el ejército azul, de ser imposible al jugador de la derecha.
11. Destruir al ejército rojo, de ser imposible al jugador de la derecha.
12. Destruir al ejército negro, de ser imposible al jugador de la derecha.
13. Destruir al ejército amarillo, de ser imposible al jugador de la derecha.
14. Destruir al ejército verde, de ser imposible al jugador de la derecha.
15. Destruir al ejército magenta, de ser imposible al jugador de la derecha.
*/

const NORTH_AMERICA_FILLING = '#e0b881';
const SOUTH_AMERICA_FILLING = '#9adf9d';
const AFRICA_FILLING = '#fdc782';
const EUROPA_FILLING = '#f2d8af';
const ASIA_FILLING = '#d6b888';
const OCEANIA_FILLING = '#aec0ba';

class TegMap extends Component {
    state = {
      currentRound: RoundType.ADD_TROOPS,
      currentPlayerIndex: 0,
      players: [
        { name: 'player1', color: 'red', troopsToAdd: 3, cards: [], cardExchanges: 0, canGetCard: false },
        { name: 'player2', color: 'yellow', troopsToAdd: 3, cards: [], cardExchanges: 0, canGetCard: false },
        { name: 'player3', color: 'blue', troopsToAdd: 3, cards: [], cardExchanges: 0, canGetCard: false },
      ],
      sourceSelection: null,
      targetSelection: null,
      dices: { attacker: [], defender: [] },
      countryCards: [],
      canadaFill: '#e0b881',
      countries: null,
      countries2: {
        // North America
        canada: {
          continent: Continents.NORTH_AMERICA,
          style: {
            filling: Fillings.NORTH_AMERICA,
          },
          state: {
            player: null,
            troops: 0,
          }
        },
        yukon: NORTH_AMERICA_FILLING,
        oregon: NORTH_AMERICA_FILLING,
        nuevaYork: NORTH_AMERICA_FILLING,
        alaska: NORTH_AMERICA_FILLING,
        mexico: NORTH_AMERICA_FILLING,
        california: NORTH_AMERICA_FILLING,
        groenlandia: NORTH_AMERICA_FILLING,
        terranova: NORTH_AMERICA_FILLING,
        labrador: NORTH_AMERICA_FILLING,
        // South America
        argentina: {
          continent: Continents.SOUTH_AMERICA,
        },
        brasil: SOUTH_AMERICA_FILLING
      },
      fill: {
        canada: NORTH_AMERICA_FILLING,
        yukon: NORTH_AMERICA_FILLING,
        oregon: NORTH_AMERICA_FILLING,
        nuevaYork: NORTH_AMERICA_FILLING,
        alaska: NORTH_AMERICA_FILLING,
        mexico: NORTH_AMERICA_FILLING,
        california: NORTH_AMERICA_FILLING,
        groenlandia: NORTH_AMERICA_FILLING,
        terranova: NORTH_AMERICA_FILLING,
        labrador: NORTH_AMERICA_FILLING,
      },
  };

    componentDidMount() {
      const countriesObj = {};
      const countries = [];

      // Set countries, players status and country cards
      Object.keys(CountriesList).forEach((key) => {
        /*
        countries[CountriesList[key]] = {
          state: {
            player: null,
            troops: 0,
          }
        };
        */
       countries.push({
         key,
         name: CountriesList[key],
         state: {
           player: null,
           troops: 0,
           newTroops: 0,
         },
       });
      });

      const countryCards = this.shuffleArray(CountryCards);

      this.setState({ countries, countryCards });
    }

    countryClicked = (country) => {
        console.log('click!');
        if (!this.state.sourceSelection) {
            // Select source
            const fill = {...this.state.fill};
            fill[country] = '#ff0000';
            this.setState({ sourceSelection: country, fill });
        } else if (!this.state.targetSelection) {
            // Select destiny
            const fill = {...this.state.fill};
            fill[country] = '#ff0001';
            this.setState({ targetSelection: country, fill });
        } else {
            // Select source and clear destiny
            const fill = {...this.state.fill};
            fill[this.state.sourceSelection] = NORTH_AMERICA_FILLING;
            fill[this.state.targetSelection] = NORTH_AMERICA_FILLING;

            this.setState({ sourceSelection: country, targetSelection: '', fill });
        }
    };

    countryMouseOut = (country) => {
        console.log('mouse out!');
        if (this.state.sourceSelection !== country && this.state.targetSelection !== country) {
            // Select source
            const fill = {...this.state.fill};
            fill[country] = '#e0b881';
            this.setState({ fill });
        }
    };

    countryMouseOver = (country) => {
        console.log('mouse over!');
        const fill = {...this.state.fill};
        fill[country] = '#ff0000';
        this.setState({ fill });
    };

    shuffleArray = (array) => {
      const shuffledArray = [...array];

      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = temp;
      }

      return shuffledArray;
    };

    dealCountries = () => {
      const numberOfPlayers = this.state.players.length;
      const countries = this.shuffleArray(this.state.countries);
      let counter = 0;

      // With object
      /*
      Object.keys(countries).forEach((key) => {
        countries[key].state.player = this.state.players[counter++ % numberOfPlayers];
        countries[key].state.troops = 1;
      });
      */

      // With array
      countries.forEach((country) => {
        country.state.player = this.state.players[counter++ % numberOfPlayers];
        country.state.troops = 1;
        country.state.newTroops = 0; // To keep track of troops added during ADD_TROOPS round
      });

      this.setState({ countries });
    };

    finishRound = () => {
      // Check if it's last player
      if (this.state.currentPlayerIndex === this.state.players.length - 1) {
        // Change round type and change order of players
        const currentPlayerIndex = 0;
        const players = [...this.state.players];
        let currentRound = '';

        if (this.state.currentRound === RoundType.ADD_TROOPS) {
          currentRound = RoundType.ATTACK;
        } else if (this.state.currentRound === RoundType.ATTACK || this.state.currentRound === RoundType.MOVE_TROOPS) {
          // Change order of players
          currentRound = RoundType.ADD_TROOPS;
          const lastPlayer = players.shift();
          players.push(lastPlayer);
        }

        // Reset troops to add
        players.forEach((player) => {
          player.troopsToAdd = 3;
          player.canGetCard = false;
        });

        // Add recently added troops to troops
        // TODO. Remove duplicate
        const countries = [...this.state.countries];

        if (this.state.currentRound === RoundType.ADD_TROOPS) {
          countries.forEach((country) => {
            country.state.troops += country.state.newTroops;
            country.state.newTroops = 0;
          });
        }

        this.setState({
          currentPlayerIndex,
          players,
          currentRound,
          countries,
        });
      } else {
        // Add recently added troops to troops
        // TODO. Remove duplicate
        const countries = [...this.state.countries];

        if (this.state.currentRound === RoundType.ADD_TROOPS) {
          countries.forEach((country) => {
            country.state.troops += country.state.newTroops;
            country.state.newTroops = 0;
          });
        }

        const currentPlayerIndex = this.state.currentPlayerIndex + 1;
        this.setState({ currentPlayerIndex, countries });
      }
    };

    addTroops = (countryName) => {
      const countries = [...this.state.countries];
      const country = countries.filter((country) => country.name === countryName);
      const players = [...this.state.players];
      const player = players[this.state.currentPlayerIndex];

      if (country && country.length > 0) {
        country[0].state.newTroops += 1;
        player.troopsToAdd -= 1;
      }

      this.setState({ country, player });

      console.log('Add to ' + countryName);
    };

    removeTroops = (countryName) => {
      const countries = [...this.state.countries];
      const country = countries.filter((country) => country.name === countryName);
      const players = [...this.state.players];
      const player = players[this.state.currentPlayerIndex];

      if (country && country.length > 0 && country[0].state.newTroops > 0) {
        country[0].state.newTroops -= 1;
        player.troopsToAdd += 1;
      }

      this.setState({ country, players });
      console.log('Remove from ' + countryName);
    };

    selectSourceHandler = (countryName) => {
      console.log('Source' + countryName);
      this.countryClicked(countryName);
    };

    selectTargetHandler = (countryName) => {
      console.log('Target' + countryName);
      this.countryClicked(countryName);
    };

    canAttack = (source, target) => {
      if (source.state.player.name === target.state.player.name) {
        return false;
      }

      // Can attack
      return true;
    };

    canMove = (source, target) => {
      if (source.state.player.name !== target.state.player.name) {
        return false;
      }

      if (source.state.troops === 1) {
        return false;
      }

      // Can move
      return true;
    };

    playerCanGetCard = (player) => {
      return true;
    };

    attack = () => {
      console.log(`${this.state.sourceSelection} attacks ${this.state.targetSelection}`);
      const countries = [...this.state.countries];
      const attacker = countries.filter((country) => country.name === this.state.sourceSelection);
      const defender = countries.filter((country) => country.name === this.state.targetSelection);

      if (!this.canAttack(attacker[0], defender[0])) {
        console.error('Cant attack!');
        return false;
      }

      // Max 3 dices per attack
      const numberOfAttackerDices = Math.min(attacker[0].state.troops - 1, 3);
      const numberOfDefenderDices = Math.min(defender[0].state.troops, 3);

      // Roll dices
      const dices = { attacker: [], defender: [] };
      for (let i = 0; i < numberOfAttackerDices; i += 1) {
        dices.attacker.push(this.throwDice());
      }

      for (let i = 0; i < numberOfDefenderDices; i += 1) {
        dices.defender.push(this.throwDice());
      }

      dices.attacker = dices.attacker.sort((a, b) => { return b-a }).slice(0, numberOfDefenderDices);
      dices.defender = dices.defender.sort((a, b) => { return b-a }).slice(0, numberOfAttackerDices);

      // Update number of troops
      dices.attacker.forEach((dice, index) => {
        if (dice > dices.defender[index]) {
          // Defender lost
          defender[0].state.troops -= 1;
          console.log('Defence lost one');
        } else {
          // Attacker lost
          attacker[0].state.troops -= 1;
          console.log('Attack lost one');
        }
      });

      // Attacker conquers country
      // Get players
      const players = [...this.state.players];

      if (defender[0].state.troops === 0) {
        console.log('Conquered!');
        defender[0].state.player = attacker[0].state.player;
        const troopsToMove = 1;

        attacker[0].state.troops -= troopsToMove;
        defender[0].state.troops = troopsToMove;

        // Get current player
        const player = players[this.state.currentPlayerIndex];

        player.canGetCard = this.playerCanGetCard(player);
      }

      this.setState({ countries, dices, players });
    };

    moveTroops = (troopsToMove) => {
      console.log(`Moving from ${this.state.sourceSelection} to ${this.state.targetSelection}`);
      const countries = [...this.state.countries];
      const source = countries.filter((country) => country.name === this.state.sourceSelection);
      const target = countries.filter((country) => country.name === this.state.targetSelection);

      if (!this.canMove(source[0], target[0])) {
        console.error('Cant attack!');
        return false;
      }

      source[0].state.troops -= troopsToMove;
      target[0].state.newTroops += troopsToMove;

      this.setState({ currentRound: RoundType.MOVE_TROOPS, countries });
    };

    getCountryCard = () => {
      console.log('Get card');
      const players = [...this.state.players];
      const player = players[this.state.currentPlayerIndex];

      // Get card from deck
      const countryCards = [...this.state.countryCards];
      const newCard = countryCards.shift();

      player.cards.push(newCard);
      player.canGetCard = false;

      this.setState({ players, countryCards });
    };

    playerCanExchangeCards = (player) => {
      if (!player.cards || player.cards.length < CardsForExchange.MIN) {
        return false;
      }

      if (player.cards.length === CardsForExchange.MAX) {
        return true;
      }

      const qtyPerType = [0, 0, 0, 0];

      player.cards.forEach((card) => {
        if (card.type === CardType.BALLOON) {
          qtyPerType[0] += 1;
        } else if (card.type === CardType.CANNON) {
          qtyPerType[1] += 1;
        } else if (card.type === CardType.SHIP) {
          qtyPerType[2] += 1;
        } else {
          // Wildcard
          qtyPerType[3] += 1;
        }
      });

      let sum = 0;

      qtyPerType.forEach((elem, index) => {
        if (elem === 3) {
          sum = 3;
        } else if (elem > 0 && index < 3) {
          sum += 1;
        } else if (index === 3) {
          // Wildcards
          sum += elem;
        }
      });

      // Count if there are 3 with same type or 3 with one type each
      return sum >= 3;
    };

    exchangeCards = () => {
      console.log('Exchange cards');
    };

    throwDice = () => {
      return Math.floor(Math.random() * 6) + 1;
    };

    render() {
      const currentPlayer = this.state.players[this.state.currentPlayerIndex];

      let map;
      debugger;

      if (this.state.countries && this.state.countries.length > 0) {
        map = <Map countries={this.state.countries} />;
      } else {
        map = <div></div>;
      }

  return (
    <div>
      <button onClick={() => this.dealCountries()}>Repartir paises</button>
      <p>Current round: {this.state.currentRound}</p>
      <p>Current player: {this.state.players[this.state.currentPlayerIndex].name}</p>
      <p>Troops to add: {currentPlayer.troopsToAdd}</p>
      <Countries
          currentPlayer={currentPlayer}
          currentRound={this.state.currentRound}
          countries={this.state.countries} 
          addTroopsHandler={this.addTroops} 
          removeTroopsHandler={this.removeTroops}
          sourceSelection={this.state.sourceSelection}
          selectSourceHandler={this.selectSourceHandler}
          targetSelection={this.state.targetSelection}
          selectTargetHandler={this.selectSourceHandler} />
      <div>
        <button onClick={() => this.finishRound()}>Terminar turno</button>
      </div>
      <div>
        <button onClick={() => this.attack()} disabled={this.state.currentRound !== RoundType.ATTACK || (!this.state.sourceSelection || !this.state.targetSelection)}>
          Atacar
        </button>
        <br />
        <button onClick={() => this.moveTroops(1)} disabled={this.state.currentRound === RoundType.ADD_TROOPS || (!this.state.sourceSelection || !this.state.targetSelection)}>
          Mover tropas
        </button>
        <br />
        <button onClick={() => this.getCountryCard()} disabled={this.state.currentRound === RoundType.ADD_TROOPS || !this.state.players[this.state.currentPlayerIndex].canGetCard}>
          Pedir tarjeta
        </button>
        <br />
        <button onClick={() => this.exchangeCards()} disabled={this.state.currentRound === RoundType.ADD_TROOPS || !this.state.players[this.state.currentPlayerIndex].canGetCard}>
          Cambiar tarjetas
        </button>
      </div>
      <div>
        <p>Source: {this.state.sourceSelection} | Target: {this.state.targetSelection}</p>
        <p>Last attack</p>
        <p>Attacker dices: {this.state.dices.attacker}</p>
        <p>Defender dices: {this.state.dices.defender}</p>
      </div>
      <div>
        {map}
      </div>
    </div>
  );
    }
}

export default TegMap;