import React, { Component } from 'react';
import { Layout } from 'antd';
import { Card } from 'antd';
import { Button, Tooltip } from 'antd';
import { Tabs } from 'antd';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';

import {
  UserAddOutlined, LoginOutlined, FireOutlined, ThunderboltOutlined, UserDeleteOutlined,
  CheckCircleOutlined, CreditCardOutlined, PlusCircleOutlined, MinusCircleOutlined, UserOutlined
} from '@ant-design/icons';

import Countries from './components/Countries/Countries';
import Map from './components/Map/Map';
import EventsLog from './components/EventsLog/EventsLog';
import BottomTabs from './components/BottomTabs/BottomTabs';
import UserInfo from './components/UserInfo/UserInfo';
import Players from './components/Sider/Players/Players';
import CountryConqueredModal from './components/Modals/CountryConqueredModal';

const { Header, Footer, Sider, Content } = Layout;

const { TabPane } = Tabs;

const CountriesList = {
  // North America
  NORTH_AMERICA: {
    name: 'Norteamerica',
    countries: {
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
      },
  },
  // South America
  SOUTH_AMERICA: {
    name: 'Sudamerica',
    countries: {
      COLOMBIA: 'colombia',
      PERU: 'peru',
      BRASIL: 'brasil',
      ARGENTINA: 'argentina',
      CHILE: 'chile',
      URUGUAY: 'uruguay',
    },
  },
  // Oceania
  OCEANIA: {
    name: 'Oceania',
    countries: {
      AUSTRALIA: 'australia',
      JAVA: 'java',
      SUMATRA: 'sumatra',
      BORNEO: 'borneo',
    },
  },
  // Africa
  AFRICA: {
    name: 'Africa',
    countries: {
      SAHARA: 'sahara',
      SOUTH_AFRICA: 'sudafrica',
      MADAGASCAR: 'madagascar',
      ZAIRE: 'zaire',
      ETHIOPIA: 'etiopia',
      EGYPT: 'egipto',
    },
  },
  // Europe
  EUROPE: {
    name: 'Europa',
    countries: {
      ICELAND: 'islandia',
      UK: 'gran bretania',
      SPAIN: 'espania',
      ITALY: 'italia',
      FRANCE: 'francia',
      GERMANY: 'alemania',
      POLAND: 'polonia',
      RUSIA: 'rusia',
      SWEDEN: 'suecia',
    },
  },
  // Asia
  ASIA: {
    name: 'Asia',
    countries: {
      ARAL: 'aral',
      TARTARIA: 'tartaria',
      TAIMIR: 'taimir',
      SIBERIA: 'siberia',
      KAMCHATKA: 'kamchatka',
      JAPAN: 'japon',
      MONGOLIA: 'mongolia',
      IRAN: 'iran',
      GOBI: 'gobi',
      CHINA: 'china',
      MALASIA: 'malasia',
      INDIA: 'india',
      TURKEY: 'turquia',
      ISRAEL: 'israel',
      ARABIA: 'arabia',
    },
  },
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
const Missions = {
  1: {
    text: 'Ocupar África, 5 países de América del Norte y 4 países de Europa.',
  },
  2: {
    text: 'Ocupar América del Sur, 7 países de Europa y 3 países limítrofes entre sí en cualquier lugar del mapa.',
  },
  3: {
    text: 'Ocupar Asia y 2 países de América del Sur.',
  },
  4: {
    text: 'Ocupar Europa, 4 países de Asia y 2 países de América del Sur.',
  },
  5: {
    text: 'Ocupar América del Norte, 2 países de Oceanía y 4 de Asia.',
  },
  6: {
    text: 'Ocupar 2 países de Oceanía, 2 países de África, 2 países de América del Sur, 3 países de Europa, 4 de América del Norte y 3 de Asia.',
  },
  7: {
    text: 'Ocupar Oceanía, América del Norte y 2 países de Europa.',
  },
  8: {
    text: 'Ocupar América del Sur, África y 4 países de Asia.',
  },
  9: {
    text: 'Ocupar Oceanía, África y 5 países de América del Norte.',
  },
  10: {
    text: 'Destruir el ejército azul, de ser imposible al jugador de la derecha.',
  },
  11: {
    text: 'Destruir al ejército rojo, de ser imposible al jugador de la derecha.',
  },
  12: {
    text: 'Destruir al ejército negro, de ser imposible al jugador de la derecha.',
  },
  13: {
    text: 'Destruir al ejército amarillo, de ser imposible al jugador de la derecha.',
  },
  14: {
    text: 'Destruir al ejército verde, de ser imposible al jugador de la derecha.',
  },
  15: {
    text: 'Destruir al ejército magenta, de ser imposible al jugador de la derecha.',
  },
};

const PlayerColors = {
  BLUE: 'blue',
  RED: 'red',
  BLACK: 'black',
  PINK: 'pink',
  YELLOW: 'yellow',
  GREEN: 'green',
};

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
      countrySelection: {
        source: null,
        target: null,
      },
      sourceSelection: null,
      targetSelection: null,
      dices: { attacker: [], defender: [] },
      countryCards: [],
      modals: {
        countryConqueredVisible: false,
      },
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
      const countries = {};

      // Set countries, players status and country cards
      Object.keys(CountriesList).forEach((continentKey) => {
        Object.keys(CountriesList[continentKey].countries).forEach((countryKey) => {
          countries[countryKey] = {
            countryKey,
            name: CountriesList[continentKey].countries[countryKey],
            state: {
              player: null,
              troops: 0,
              newTroops: 0,
            },
          };
        });
      });

      const countryCards = this.shuffleArray(CountryCards);

      this.setState({ countries, countryCards });

      // Deal countries
      this.dealCountries(countries);
    }

    countryClicked = (country) => {
      debugger;
      const countrySelection = { ...this.state.countrySelection };
        console.log('click!' + country);
        if (!this.state.countrySelection.source) {
            // Select source
            const fill = {...this.state.fill};
            fill[country] = '#ff0000';
            countrySelection.source = country;
            this.setState({ countrySelection, fill });
        } else if (!this.state.countrySelection.target) {
            // Select destiny
            const fill = {...this.state.fill};
            fill[country] = '#ff0001';
            countrySelection.target = country;
            this.setState({ countrySelection, fill });
        } else {
            // Select source and clear destiny
            const fill = {...this.state.fill};
            fill[this.state.countrySelection.source] = NORTH_AMERICA_FILLING;
            fill[this.state.countrySelection.target] = NORTH_AMERICA_FILLING;
            countrySelection.source = country;
            countrySelection.target = '';

            this.setState({ countrySelection, fill });
        }
    };

    shadeColor = (color, percent) => {

      var R = parseInt(color.substring(1,3),16);
      var G = parseInt(color.substring(3,5),16);
      var B = parseInt(color.substring(5,7),16);
  
      R = parseInt(R * (100 + percent) / 100);
      G = parseInt(G * (100 + percent) / 100);
      B = parseInt(B * (100 + percent) / 100);
  
      R = (R<255)?R:255;  
      G = (G<255)?G:255;  
      B = (B<255)?B:255;  
  
      var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
      var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
      var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));
  
      return "#"+RR+GG+BB;
    };

    /*
    countryMouseOut = (country, defaultFill) => {
        console.log('mouse out!');
        if (this.state.sourceSelection !== country && this.state.targetSelection !== country) {
            // Select source
            const fill = {...this.state.fill};
            fill[country] =  defaultFill; //'#e0b881';
            this.setState({ fill });
        }
    };

    countryMouseOver = (country, defaultFill) => {
        console.log('mouse over!');
        const fill = {...this.state.fill};
        fill[country] = this.shadeColor(defaultFill, -50); //'#ff0000';
        this.setState({ fill });
    };
    */

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

    dealCountries = (countriesP) => {
      // const numberOfPlayers = this.state.players.length;
      // const countryKeys = this.shuffleArray(Object.keys(this.state.countries));
      // const countries = {...this.state.countries};
      const numberOfPlayers = 3;
      const countryKeys = this.shuffleArray(Object.keys(countriesP));
      const countries = {...countriesP};
      let counter = 0;

      // With object
      /*
      Object.keys(countries).forEach((key) => {
        countries[key].state.player = this.state.players[counter++ % numberOfPlayers];
        countries[key].state.troops = 1;
      });
      */

      // With array
      countryKeys.forEach((key) => {
        const country = countries[key];
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
        const countries = {...this.state.countries};

        if (this.state.currentRound === RoundType.ADD_TROOPS) {
          Object.keys(countries).forEach((countryKey) => {
            const country = countries[countryKey];
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
        const countries = {...this.state.countries};

        if (this.state.currentRound === RoundType.ADD_TROOPS) {
          Object.keys(countries).forEach((countryKey) => {
            const country = countries[countryKey];
            country.state.troops += country.state.newTroops;
            country.state.newTroops = 0;
          });
        }

        const currentPlayerIndex = this.state.currentPlayerIndex + 1;
        this.setState({ currentPlayerIndex, countries });
      }
    };

    addTroops = (countryName) => {
      const countries = {...this.state.countries};
      // const country = countries.filter((country) => country.name === countryName);
      const country = countries[countryName];
      const players = [...this.state.players];
      const player = players[this.state.currentPlayerIndex];

      if (country) {
        country.state.newTroops += 1;
        player.troopsToAdd -= 1;
      }

      this.setState({ countries, player });

      console.log('Add to ' + countryName);
    };

    removeTroops = (countryName) => {
      const countries = {...this.state.countries};
      const country = countries[countryName];
      const players = [...this.state.players];
      const player = players[this.state.currentPlayerIndex];

      if (country && country.state.newTroops > 0) {
        country.state.newTroops -= 1;
        player.troopsToAdd += 1;
      }

      this.setState({ countries, players });
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
      console.log(`${this.state.countrySelection.source} attacks ${this.state.countrySelection.target}`);
      const countries = {...this.state.countries};
      const attacker = countries[this.state.countrySelection.source];
      const defender = countries[this.state.countrySelection.target];

      if (!this.canAttack(attacker, defender)) {
        console.error('Cant attack!');
        return false;
      }

      // Max 3 dices per attack
      const numberOfAttackerDices = Math.min(attacker.state.troops - 1, 3);
      const numberOfDefenderDices = Math.min(defender.state.troops, 3);

      // Roll dices
      const dices = { attacker: [], defender: [] };
      for (let i = 0; i < numberOfAttackerDices; i += 1) {
        dices.attacker.push(this.throwDice());
      }

      for (let i = 0; i < numberOfDefenderDices; i += 1) {
        dices.defender.push(this.throwDice());
      }

      dices.attacker = dices.attacker.sort((a, b) => { return b-a });
      dices.defender = dices.defender.sort((a, b) => { return b-a });

      const dicesCopy = { dices };

      dicesCopy.attacker = dices.attacker.sort((a, b) => { return b-a }).slice(0, numberOfDefenderDices);
      dicesCopy.defender = dices.defender.sort((a, b) => { return b-a }).slice(0, numberOfAttackerDices);

      // Update number of troops
      dicesCopy.attacker.forEach((dice, index) => {
        if (dice > dicesCopy.defender[index]) {
          // Defender lost
          defender.state.troops -= 1;
          console.log('Defence lost one');
        } else {
          // Attacker lost
          attacker.state.troops -= 1;
          console.log('Attack lost one');
        }
      });

      // Attacker conquers country
      // Get players
      const players = [...this.state.players];
      const modals = { ...this.state.modals };

      if (defender.state.troops === 0) {
        console.log('Conquered!');
        defender.state.player = attacker.state.player;
        const troopsToMove = 1;

        // attacker.state.troops -= troopsToMove;
        // defender.state.troops = troopsToMove;

        // Get current player
        const player = players[this.state.currentPlayerIndex];

        player.canGetCard = this.playerCanGetCard(player);

        modals.countryConqueredVisible = true;
      }

      this.setState({ countries, dices, players, modals });
    };

    moveTroops = (troopsToMove) => {
      console.log(`Moving from ${this.state.countrySelection.source} to ${this.state.countrySelection.target}`);
      const countries = {...this.state.countries};
      const source = countries[this.state.countrySelection.source];
      const target = countries[this.state.countrySelection.target];

      if (!this.canMove(source, target)) {
        console.error('Cant attack!');
        return false;
      }

      source.state.troops -= troopsToMove;
      target.state.newTroops += troopsToMove;

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

    tabChangeCallback = (key) => {
      console.log(key);
    };

    handleOk = (troopsToMove) => {
      debugger;
      console.log(`move ${troopsToMove} troops`);
      const countries = {...this.state.countries};
      const attacker = countries[this.state.countrySelection.source];
      const defender = countries[this.state.countrySelection.target];
      attacker.state.troops -= troopsToMove;
      defender.state.troops = troopsToMove;

      const modals = { ...this.state.modals };
      modals.countryConqueredVisible = false;

      this.setState({ countries, modals });
    };

    render() {
      const currentPlayer = this.state.players[this.state.currentPlayerIndex];

      let map;
      let countryList;
      let countryConqueredModal;

      if (this.state.countries) {
        map = <Map
                countries={this.state.countries}
                fill={this.state.fill}
                countrySelection={this.state.countrySelection}
                countryClickedHandler={this.countryClicked}
                onMouseOverHandler={this.countryMouseOver}
                onMouseOutHandler={this.countryMouseOut} />;
        countryList = <Countries
                        currentPlayer={currentPlayer}
                        currentRound={this.state.currentRound}
                        countries={this.state.countries} 
                        addTroopsHandler={this.addTroops} 
                        removeTroopsHandler={this.removeTroops}
                        sourceSelection={this.state.countrySelection.source}
                        selectSourceHandler={this.selectSourceHandler}
                        targetSelection={this.state.countrySelection.target}
                        selectTargetHandler={this.selectSourceHandler} />;
      } else {
        map = <div></div>;
        countryList = <div></div>;
      }

      if (this.state.countrySelection && this.state.countrySelection.source) {
        const troops = this.state.countries[this.state.countrySelection.source].state.troops;
        const title = `${this.state.countrySelection.source} conquered ${this.state.countrySelection.target}!`;
        countryConqueredModal = <CountryConqueredModal troops={troops} title={title}
          countryConqueredModalVisible={this.state.modals.countryConqueredVisible}
          moveTroopsHandler={this.handleOk} />;
      } else {
        countryConqueredModal = '';
      }

      // Card Head style
      const cardHeadStyle = { fontWeight: 'bold', backgroundColor: 'lightblue' };

  return (
    <Layout>
      <Header>
        <Row style={{ color: 'white' }}>
          <Col span={12}>
            <h1 style={{ color: 'white' }}>Teg Online</h1>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                Current round: {this.state.currentRound}
              </Col>
              <Col span={12}>
              Current player: &nbsp;
              <Avatar style={{ backgroundColor: this.state.players[this.state.currentPlayerIndex].color }} icon={<UserOutlined />} />&nbsp;
              {this.state.players[this.state.currentPlayerIndex].name}
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Content>
          {countryConqueredModal}
          <div>
            <div>
              {map}
            </div>
            <hr />
            <div className="card-container">
              <Tabs type="card">
                <TabPane tab="Tab Title 1" key="1">
                  <p>Content of Tab Pane 1</p>
                  <p>Content of Tab Pane 1</p>
                  <p>Content of Tab Pane 1</p>
                </TabPane>
                <TabPane tab="Tab Title 2" key="2">
                  <p>Content of Tab Pane 2</p>
                  <p>Content of Tab Pane 2</p>
                  <p>Content of Tab Pane 2</p>
                </TabPane>
                <TabPane tab="Countries" key="3">
                  {countryList}
                </TabPane>
              </Tabs>
            </div>
          </div>
        </Content>
        <Sider style={{ color: 'white' }}>
          <Card size="small" title="Last Attack" headStyle={cardHeadStyle} >
            <p>Attacker dices: {this.state.dices.attacker.join(', ')}</p>
            <p>Defender dices: {this.state.dices.defender.join(', ')}</p>
          </Card>
          <Card size="small" title="Actions" headStyle={cardHeadStyle} >
            <Tooltip title="Finish Round">
              <Button type="primary" shape="circle" icon={<CheckCircleOutlined twoToneColor="#52c41a" />} style={{ marginRight: '4px' }}
                  onClick={() => this.finishRound()} />
            </Tooltip>
            <Tooltip title="Get Card">
              <Button type="primary" shape="circle" icon={<CreditCardOutlined />} style={{ marginRight: '4px' }}
                  onClick={() => this.getCountryCard()} disabled={this.state.currentRound === RoundType.ADD_TROOPS || !this.state.players[this.state.currentPlayerIndex].canGetCard} />
            </Tooltip>
            <Tooltip title="Exchange Cards">
              <Button type="primary" shape="circle" icon={<UserAddOutlined />} style={{ marginRight: '4px' }}
                  onClick={() => this.exchangeCards()} disabled={this.state.currentRound === RoundType.ADD_TROOPS || !this.state.players[this.state.currentPlayerIndex].canGetCard} />
            </Tooltip>
          </Card>
          <Card size="small" title="Country" headStyle={cardHeadStyle}>
            <p>Source: {this.state.countrySelection.source}</p>
            <p>Target: {this.state.countrySelection.target}</p>
            <Tooltip title="Add Troops">
              <Button type="primary" shape="circle" icon={<PlusCircleOutlined />} style={{ marginRight: '4px' }}
                  disabled={!this.state.countrySelection.source}
                  onClick={() => this.addTroops(this.state.countrySelection.source)} />
            </Tooltip>
            <Tooltip title="Remove Troops">
              <Button type="primary" shape="circle" icon={<MinusCircleOutlined />} style={{ marginRight: '4px' }}
                  disabled={!this.state.countrySelection.source}
                  onClick={() => this.removeTroops(this.state.countrySelection.source)} />
            </Tooltip>
            <Tooltip title="Move Troops">
              <Button type="primary" shape="circle" icon={<LoginOutlined />} style={{ marginRight: '4px' }}
                  onClick={() => this.moveTroops(1)} disabled={this.state.currentRound === RoundType.ADD_TROOPS || (!this.state.countrySelection.source || !this.state.countrySelection.target)} />
            </Tooltip>
            <Tooltip title="Attack">
              <Button type="primary" shape="circle" icon={<ThunderboltOutlined />}
                  onClick={() => this.attack()} disabled={this.state.currentRound !== RoundType.ATTACK || (!this.state.countrySelection.source || !this.state.countrySelection.target)} />
            </Tooltip>
          </Card>
          <Players players={this.state.players} headStyle={cardHeadStyle} currentPlayerIndex={this.state.currentPlayerIndex} />
          <UserInfo troopsToAdd={currentPlayer.troopsToAdd} headStyle={cardHeadStyle} />
        </Sider>
      </Layout>
      <Footer>
        Footer
      </Footer>
    </Layout>
  );
    }
}

export default TegMap;