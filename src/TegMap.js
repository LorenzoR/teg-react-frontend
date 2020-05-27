import React, { Component } from "react";
import _ from "lodash";

import { Layout } from "antd";
import { Card } from "antd";
import { Button, Tooltip } from "antd";
import { Tabs } from "antd";
import { Row, Col } from "antd";
import { Avatar } from "antd";
import { Statistic } from "antd";
import { notification, Divider, Space } from "antd";

import {
  UserAddOutlined,
  LoginOutlined,
  FireOutlined,
  ThunderboltOutlined,
  UserDeleteOutlined,
  CheckCircleOutlined,
  CreditCardOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Countries from "./components/Countries/Countries";
import Map from "./components/Map/Map";
import EventsLog from "./components/EventsLog/EventsLog";
import BottomTabs from "./components/BottomTabs/BottomTabs";
import UserInfo from "./components/UserInfo/UserInfo";
import Players from "./components/Sider/Players/Players";
import PlayerCardsTab from "./components/BottomTabs/PlayerCardsTab/PlayerCardsTab";

import CountryConqueredModal from "./components/Modals/CountryConqueredModal";

import Country from "./models/Country";

const { Header, Footer, Sider, Content } = Layout;

const { TabPane } = Tabs;

const { Countdown } = Statistic;

const CountriesRaw = {
  // North America
  CANADA: "CANADA",
  YUKON: "YUKON",
  OREGON: "OREGON",
  NEW_YORK: "NEW_YORK",
  ALASKA: "ALASKA",
  MEXICO: "MEXICO",
  CALIFORNIA: "CALIFORNIA",
  GREENLAND: "GREENLAND",
  TERRANOVA: "TERRANOVA",
  LABRADOR: "LABRADOR",
  // South America
  COLOMBIA: "COLOMBIA",
  PERU: "PERU",
  BRASIL: "BRASIL",
  ARGENTINA: "ARGENTINA",
  CHILE: "CHILE",
  URUGUAY: "URUGUAY",
  // Oceania
  AUSTRALIA: "AUSTRALIA",
  JAVA: "JAVA",
  SUMATRA: "SUMATRA",
  BORNEO: "BORNEO",
  // Africa
  SAHARA: "SAHARA",
  SOUTH_AFRICA: "SOUTH_AFRICA",
  MADAGASCAR: "MADAGASCAR",
  ZAIRE: "ZAIRE",
  ETHIOPIA: "ETHIOPIA",
  EGYPT: "EGYPT",
  // Europe
  ICELAND: "ICELAND",
  UK: "UK",
  SPAIN: "SPAIN",
  ITALY: "ITALY",
  FRANCE: "FRANCE",
  GERMANY: "GERMANY",
  POLAND: "POLAND",
  RUSIA: "RUSIA",
  SWEDEN: "SWEDEN",
  // Asia
  ARAL: "ARAL",
  TARTARIA: "TARTARIA",
  TAIMIR: "TAIMIR",
  SIBERIA: "SIBERIA",
  KAMCHATKA: "KAMCHATKA",
  JAPAN: "JAPAN",
  MONGOLIA: "MONGOLIA",
  IRAN: "IRAN",
  GOBI: "GOBI",
  CHINA: "CHINA",
  MALASIA: "MALASIA",
  INDIA: "INDIA",
  TURKEY: "TURKEY",
  ISRAEL: "ISRAEL",
  ARABIA: "ARABIA",
};

const CountriesList = {
  // North America
  NORTH_AMERICA: {
    name: "Norteamerica",
    countries: {
      CANADA: "canada",
      YUKON: "yukon",
      OREGON: "oregon",
      NEW_YORK: "newYork",
      ALASKA: "alaska",
      MEXICO: "mexico",
      CALIFORNIA: "california",
      GREENLAND: "greenland",
      TERRANOVA: "terranova",
      LABRADOR: "labrador",
    },
  },
  // South America
  SOUTH_AMERICA: {
    name: "Sudamerica",
    countries: {
      COLOMBIA: "colombia",
      PERU: "peru",
      BRASIL: "brasil",
      ARGENTINA: "argentina",
      CHILE: "chile",
      URUGUAY: "uruguay",
    },
  },
  // Oceania
  OCEANIA: {
    name: "Oceania",
    countries: {
      AUSTRALIA: "australia",
      JAVA: "java",
      SUMATRA: "sumatra",
      BORNEO: "borneo",
    },
  },
  // Africa
  AFRICA: {
    name: "Africa",
    countries: {
      SAHARA: "sahara",
      SOUTH_AFRICA: "sudafrica",
      MADAGASCAR: "madagascar",
      ZAIRE: "zaire",
      ETHIOPIA: "etiopia",
      EGYPT: "egipto",
    },
  },
  // Europe
  EUROPE: {
    name: "Europa",
    countries: {
      ICELAND: "islandia",
      UK: "gran bretania",
      SPAIN: "espania",
      ITALY: "italia",
      FRANCE: "francia",
      GERMANY: "alemania",
      POLAND: "polonia",
      RUSIA: "rusia",
      SWEDEN: "suecia",
    },
  },
  // Asia
  ASIA: {
    name: "Asia",
    countries: {
      ARAL: "aral",
      TARTARIA: "tartaria",
      TAIMIR: "taimir",
      SIBERIA: "siberia",
      KAMCHATKA: "kamchatka",
      JAPAN: "japon",
      MONGOLIA: "mongolia",
      IRAN: "iran",
      GOBI: "gobi",
      CHINA: "china",
      MALASIA: "malasia",
      INDIA: "india",
      TURKEY: "turquia",
      ISRAEL: "israel",
      ARABIA: "arabia",
    },
  },
};

const Continents = {
  AFRICA: {
    name: "africa",
    bonus: 3,
  },
  EUROPE: {
    name: "europe",
    bonus: 5,
  },
  SOUTH_AMERICA: {
    name: "southAmerica",
    bonus: 3,
  },
  NORTH_AMERICA: {
    name: "northAmerica",
    bonus: 5,
  },
  OCEANIA: {
    name: "oceania",
    bonus: 2,
  },
  ASIA: {
    name: "asia",
    bonus: 7,
  },
};

const Fillings = {
  AFRICA: "#fdc782",
  EUROPE: "#f2d8af",
  SOUTH_AMERICA: "#9adf9d",
  NORTH_AMERICA: "#e0b881",
  OCEANIA: "#aec0ba",
  ASIA: "#d6b888",
};

const RoundType = {
  ATTACK: "attack",
  MOVE_TROOPS: "moveTroops",
  ADD_TROOPS: "addTroops",
  GET_CARD: "getCard",
};

const CardExchange = [4, 7, 10, 15, 20];

const CardType = {
  SHIP: "ship",
  CANNON: "cannon",
  BALLOON: "balloon",
  WILDCARD: "wildcard",
};

const CountryCards = [
  // Ships
  { country: CountriesRaw.MADAGASCAR, type: CardType.SHIP },
  { country: CountriesRaw.BORNEO, type: CardType.SHIP },
  { country: CountriesRaw.ISRAEL, type: CardType.SHIP },
  { country: CountriesRaw.PERU, type: CardType.SHIP },
  { country: CountriesRaw.ZAIRE, type: CardType.SHIP },
  { country: CountriesRaw.ICELAND, type: CardType.SHIP },
  { country: CountriesRaw.ALASKA, type: CardType.SHIP },
  { country: CountriesRaw.BRASIL, type: CardType.SHIP },
  { country: CountriesRaw.SIBERIA, type: CardType.SHIP },
  { country: CountriesRaw.GERMANY, type: CardType.SHIP },
  { country: CountriesRaw.TURKEY, type: CardType.SHIP },
  { country: CountriesRaw.UK, type: CardType.SHIP },
  { country: CountriesRaw.MONGOLIA, type: CardType.SHIP },
  { country: CountriesRaw.CHINA, type: CardType.SHIP },
  { country: CountriesRaw.SWEDEN, type: CardType.SHIP },
  { country: CountriesRaw.NEW_YORK, type: CardType.SHIP },
  // Cannons
  { country: CountriesRaw.ARABIA, type: CardType.CANNON },
  { country: CountriesRaw.MEXICO, type: CardType.CANNON },
  { country: CountriesRaw.CALIFORNIA, type: CardType.CANNON },
  { country: CountriesRaw.CANADA, type: CardType.CANNON },
  { country: CountriesRaw.ARAL, type: CardType.CANNON },
  { country: CountriesRaw.JAPAN, type: CardType.CANNON },
  { country: CountriesRaw.TERRANOVA, type: CardType.CANNON },
  { country: CountriesRaw.SOUTH_AFRICA, type: CardType.CANNON },
  { country: CountriesRaw.SAHARA, type: CardType.CANNON },
  { country: CountriesRaw.OREGON, type: CardType.CANNON },
  { country: CountriesRaw.AUSTRALIA, type: CardType.CANNON },
  { country: CountriesRaw.LABRADOR, type: CardType.CANNON },
  { country: CountriesRaw.MALASIA, type: CardType.CANNON },
  { country: CountriesRaw.POLAND, type: CardType.CANNON },
  { country: CountriesRaw.TARTARIA, type: CardType.CANNON },
  { country: CountriesRaw.JAVA, type: CardType.CANNON },
  // Balloons
  { country: CountriesRaw.SPAIN, type: CardType.BALLOON },
  { country: CountriesRaw.GREENLAND, type: CardType.BALLOON },
  { country: CountriesRaw.INDIA, type: CardType.BALLOON },
  { country: CountriesRaw.RUSIA, type: CardType.BALLOON },
  { country: CountriesRaw.YUKON, type: CardType.BALLOON },
  { country: CountriesRaw.EGYPT, type: CardType.BALLOON },
  { country: CountriesRaw.KAMCHATKA, type: CardType.BALLOON },
  { country: CountriesRaw.ETHIOPIA, type: CardType.BALLOON },
  { country: CountriesRaw.IRAN, type: CardType.BALLOON },
  { country: CountriesRaw.URUGUAY, type: CardType.BALLOON },
  { country: CountriesRaw.ITALY, type: CardType.BALLOON },
  { country: CountriesRaw.CHILE, type: CardType.BALLOON },
  { country: CountriesRaw.GOBI, type: CardType.BALLOON },
  { country: CountriesRaw.FRANCE, type: CardType.BALLOON },
  { country: CountriesRaw.SUMATRA, type: CardType.BALLOON },
  { country: CountriesRaw.COLOMBIA, type: CardType.BALLOON },
  // Wildcards
  { country: CountriesRaw.ARGENTINA, type: CardType.WILDCARD },
  { country: CountriesRaw.TAIMIR, type: CardType.WILDCARD },
];

const CardsForExchange = {
  MIN: 3,
  MAX: 5,
};

// List of missions
const Missions = {
  1: {
    text: "Ocupar África, 5 países de América del Norte y 4 países de Europa.",
  },
  2: {
    text:
      "Ocupar América del Sur, 7 países de Europa y 3 países limítrofes entre sí en cualquier lugar del mapa.",
  },
  3: {
    text: "Ocupar Asia y 2 países de América del Sur.",
  },
  4: {
    text: "Ocupar Europa, 4 países de Asia y 2 países de América del Sur.",
  },
  5: {
    text: "Ocupar América del Norte, 2 países de Oceanía y 4 de Asia.",
  },
  6: {
    text:
      "Ocupar 2 países de Oceanía, 2 países de África, 2 países de América del Sur, 3 países de Europa, 4 de América del Norte y 3 de Asia.",
  },
  7: {
    text: "Ocupar Oceanía, América del Norte y 2 países de Europa.",
  },
  8: {
    text: "Ocupar América del Sur, África y 4 países de Asia.",
  },
  9: {
    text: "Ocupar Oceanía, África y 5 países de América del Norte.",
  },
  10: {
    text:
      "Destruir el ejército azul, de ser imposible al jugador de la derecha.",
  },
  11: {
    text:
      "Destruir al ejército rojo, de ser imposible al jugador de la derecha.",
  },
  12: {
    text:
      "Destruir al ejército negro, de ser imposible al jugador de la derecha.",
  },
  13: {
    text:
      "Destruir al ejército amarillo, de ser imposible al jugador de la derecha.",
  },
  14: {
    text:
      "Destruir al ejército verde, de ser imposible al jugador de la derecha.",
  },
  15: {
    text:
      "Destruir al ejército magenta, de ser imposible al jugador de la derecha.",
  },
};

const PlayerColors = {
  BLUE: "blue",
  RED: "red",
  BLACK: "black",
  PINK: "pink",
  YELLOW: "yellow",
  GREEN: "green",
};

const MIN_TROOPS_PER_ROUND = 3;

const NORTH_AMERICA_FILLING = "#e0b881";
const SOUTH_AMERICA_FILLING = "#9adf9d";
const AFRICA_FILLING = "#fdc782";
const EUROPA_FILLING = "#f2d8af";
const ASIA_FILLING = "#d6b888";
const OCEANIA_FILLING = "#aec0ba";

class TegMap extends Component {
  state = {
    currentRound: RoundType.ADD_TROOPS,
    currentPlayerIndex: 0,
    players: [
      {
        id: 1,
        name: "player1",
        color: "red",
        troopsToAdd: 3,
        cards: [CountryCards[0], CountryCards[1], CountryCards[2], CountryCards[3]],
        cardExchanges: 0,
        canGetCard: false,
      },
      {
        id: 2,
        name: "player2",
        color: "yellow",
        troopsToAdd: 3,
        cards: [],
        cardExchanges: 0,
        canGetCard: false,
      },
      {
        id: 3,
        name: "player3",
        color: "blue",
        troopsToAdd: 3,
        cards: [],
        cardExchanges: 0,
        canGetCard: false,
      },
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
    canadaFill: "#e0b881",
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
        },
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
      brasil: SOUTH_AMERICA_FILLING,
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
      Object.keys(CountriesList[continentKey].countries).forEach(
        (countryKey) => {
          countries[countryKey] = {
            countryKey,
            name: CountriesList[continentKey].countries[countryKey],
            state: {
              player: null,
              troops: 0,
              newTroops: 0,
            },
          };
        }
      );
    });

    const countryCards = this.shuffleArray(CountryCards);

    this.setState({ countries, countryCards });

    // Deal countries
    this.dealCountries(countries);
  }

  countryClicked = (country) => {
    debugger;
    const countrySelection = { ...this.state.countrySelection };
    console.log("click!" + country);
    if (!this.state.countrySelection.source) {
      // Select source
      countrySelection.source = country;
      this.setState({ countrySelection });
    } else if (!this.state.countrySelection.target) {
      // Select destiny
      countrySelection.target = country;
      this.setState({ countrySelection });
    } else {
      // Select source and clear destiny
      countrySelection.source = country;
      countrySelection.target = "";

      this.setState({ countrySelection });
    }
  };

  countryClickedBAK = (country) => {
    debugger;
    const countrySelection = { ...this.state.countrySelection };
    console.log("click!" + country);
    if (!this.state.countrySelection.source) {
      // Select source
      const fill = { ...this.state.fill };
      fill[country] = "#ff0000";
      countrySelection.source = country;
      this.setState({ countrySelection, fill });
    } else if (!this.state.countrySelection.target) {
      // Select destiny
      const fill = { ...this.state.fill };
      fill[country] = "#ff0001";
      countrySelection.target = country;
      this.setState({ countrySelection, fill });
    } else {
      // Select source and clear destiny
      const fill = { ...this.state.fill };
      fill[this.state.countrySelection.source] = NORTH_AMERICA_FILLING;
      fill[this.state.countrySelection.target] = NORTH_AMERICA_FILLING;
      countrySelection.source = country;
      countrySelection.target = "";

      this.setState({ countrySelection, fill });
    }
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

  dealCountries = (countriesP) => {
    const numberOfPlayers = this.state.players.length;
    const countryKeys = this.shuffleArray(Object.keys(countriesP));
    const countries = { ...countriesP };
    let counter = 0;

    countryKeys.forEach((key) => {
      const country = countries[key];
      country.state.player = this.state.players[counter++ % numberOfPlayers];
      country.state.troops = 1;
      country.state.newTroops = 0; // To keep track of troops added during ADD_TROOPS round
    });

    this.setState({ countries });
  };

  calculateTroopsToAddPerPlayer = () => {
    const countries = this.state.countries;
    const troopsPerPlayer = {};

    Object.keys(countries).forEach((countryKey) => {
      const country = countries[countryKey];

      if (!troopsPerPlayer[country.state.player.id]) {
        troopsPerPlayer[country.state.player.id] = 0;
      }

      troopsPerPlayer[country.state.player.id] += 1;
    });

    // Min is 3 troops
    Object.keys(troopsPerPlayer).forEach((key) => {
      troopsPerPlayer[key] = Math.max(
        MIN_TROOPS_PER_ROUND,
        troopsPerPlayer[key]
      );
    });

    return troopsPerPlayer;
  };

  finishRound = () => {
    // Check if it's last player
    if (this.state.currentPlayerIndex === this.state.players.length - 1) {
      // Change round type and change order of players
      const currentPlayerIndex = 0;
      const players = [...this.state.players];
      let currentRound = "";

      if (this.state.currentRound === RoundType.ADD_TROOPS) {
        currentRound = RoundType.ATTACK;
      } else if (
        this.state.currentRound === RoundType.ATTACK ||
        this.state.currentRound === RoundType.MOVE_TROOPS
      ) {
        // Change order of players
        currentRound = RoundType.ADD_TROOPS;
        const lastPlayer = players.shift();
        players.push(lastPlayer);
      }

      // Reset troops to add
      const troopsPerPlayer = this.calculateTroopsToAddPerPlayer();

      players.forEach((player) => {
        player.troopsToAdd = troopsPerPlayer[player.id];
        player.canGetCard = false;
      });

      // Add recently added troops to troops
      // TODO. Remove duplicate
      const countries = { ...this.state.countries };

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
      const countries = { ...this.state.countries };

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
    const countries = { ...this.state.countries };
    // const country = countries.filter((country) => country.name === countryName);
    const country = countries[countryName];
    const players = [...this.state.players];
    const player = players[this.state.currentPlayerIndex];

    if (country) {
      country.state.newTroops += 1;
      player.troopsToAdd -= 1;
    }

    this.setState({ countries, player });

    console.log("Add to " + countryName);
  };

  removeTroops = (countryName) => {
    const countries = { ...this.state.countries };
    const country = countries[countryName];
    const players = [...this.state.players];
    const player = players[this.state.currentPlayerIndex];

    if (country && country.state.newTroops > 0) {
      country.state.newTroops -= 1;
      player.troopsToAdd += 1;
    }

    this.setState({ countries, players });
    console.log("Remove from " + countryName);
  };

  selectSourceHandler = (countryName) => {
    console.log("Source" + countryName);
    this.countryClicked(countryName);
  };

  selectTargetHandler = (countryName) => {
    console.log("Target" + countryName);
    this.countryClicked(countryName);
  };

  canAttack = (source, target) => {
    return Country.canAttack(source, target);
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
    console.log(
      `${this.state.countrySelection.source} attacks ${this.state.countrySelection.target}`
    );
    const countries = { ...this.state.countries };
    const attacker = countries[this.state.countrySelection.source];
    const defender = countries[this.state.countrySelection.target];

    if (!this.canAttack(attacker, defender)) {
      console.error("Cant attack!");
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

    dices.attacker = dices.attacker.sort((a, b) => {
      return b - a;
    });
    dices.defender = dices.defender.sort((a, b) => {
      return b - a;
    });

    const dicesCopy = { dices };

    dicesCopy.attacker = dices.attacker
      .sort((a, b) => {
        return b - a;
      })
      .slice(0, numberOfDefenderDices);
    dicesCopy.defender = dices.defender
      .sort((a, b) => {
        return b - a;
      })
      .slice(0, numberOfAttackerDices);

    // Update number of troops
    dicesCopy.attacker.forEach((dice, index) => {
      if (dice > dicesCopy.defender[index]) {
        // Defender lost
        defender.state.troops -= 1;
        console.log("Defence lost one");
      } else {
        // Attacker lost
        attacker.state.troops -= 1;
        console.log("Attack lost one");
      }
    });

    // Attacker conquers country
    // Get players
    const players = [...this.state.players];
    const modals = { ...this.state.modals };

    if (defender.state.troops === 0) {
      console.log("Conquered!");
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
    console.log(
      `Moving from ${this.state.countrySelection.source} to ${this.state.countrySelection.target}`
    );
    const countries = { ...this.state.countries };
    const source = countries[this.state.countrySelection.source];
    const target = countries[this.state.countrySelection.target];

    if (!this.canMove(source, target)) {
      console.error("Cant attack!");
      return false;
    }

    source.state.troops -= troopsToMove;
    target.state.newTroops += troopsToMove;

    this.setState({ currentRound: RoundType.MOVE_TROOPS, countries });
  };

  getCountryCard = () => {
    console.log("Get card");
    const players = [...this.state.players];
    const player = players[this.state.currentPlayerIndex];

    // Get card from deck
    const countryCards = [...this.state.countryCards];
    const newCard = countryCards.shift();
    newCard.exchanged = false;

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
      if (elem >= 3) {
        sum = elem;
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

  exchangeCards = (cards) => {
    const player = this.state.players[this.state.currentPlayerIndex];

    if (!this.playerCanExchangeCards(player)) {
      console.error("You cant exchange");
      return null;
    }

    console.log("Exchange cards");
  };

  throwDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  tabChangeCallback = (key) => {
    console.log(key);
  };

  handleOk = (troopsToMove) => {
    console.log(`move ${troopsToMove} troops`);
    const countries = { ...this.state.countries };
    const attacker = countries[this.state.countrySelection.source];
    const defender = countries[this.state.countrySelection.target];
    attacker.state.troops -= troopsToMove;
    defender.state.troops = troopsToMove;

    const modals = { ...this.state.modals };
    modals.countryConqueredVisible = false;

    this.setState({ countries, modals });
  };

  openNotification = (placement) => {
    notification.info({
      message: `Notification ${placement}`,
      description: "Time out!",
      placement,
    });
  };

  onCounterFinish = () => {
    console.log("Time out!");
    // Notification
    this.openNotification("topRight");
    this.finishRound();
  };

  changeCountryCard = (country) => {
    console.log("cambio " + country);
    const countries = { ...this.state.countries };
    const cardCountry = _.find(countries, function (o) {
      return o.countryKey === country;
    });

    if (!cardCountry) {
      // TODO. Handle error
      return null;
    }

    const players = [...this.state.players];
    const player = players[this.state.currentPlayerIndex];

    if (cardCountry.state.player.name !== player.name) {
      // TODO. Handle error
      console.error("Player does not have this country");
      return null;
    }

    const card = _.find(player.cards, function (card) {
      return card.country === country;
    });

    if (!card) {
      // TODO. Handle error
      return null;
    }

    // Add troops
    cardCountry.state.troops += 2;

    // Set as exchanged
    card.exchanged = true;

    this.setState({ players });
  };

  render() {
    const currentPlayer = this.state.players[this.state.currentPlayerIndex];

    let map;
    let countryList;
    let countryConqueredModal;
    let playerCards;

    if (this.state.countries) {
      map = (
        <Map
          countries={this.state.countries}
          fill={this.state.fill}
          countrySelection={this.state.countrySelection}
          countryClickedHandler={this.countryClicked}
          onMouseOverHandler={this.countryMouseOver}
          onMouseOutHandler={this.countryMouseOut}
        />
      );
      countryList = (
        <Countries
          currentPlayer={currentPlayer}
          currentRound={this.state.currentRound}
          countries={this.state.countries}
          addTroopsHandler={this.addTroops}
          removeTroopsHandler={this.removeTroops}
          sourceSelection={this.state.countrySelection.source}
          selectSourceHandler={this.selectSourceHandler}
          targetSelection={this.state.countrySelection.target}
          selectTargetHandler={this.selectSourceHandler}
        />
      );
    } else {
      map = <div></div>;
      countryList = <div></div>;
    }

    if (this.state.countrySelection && this.state.countrySelection.source) {
      const troops = this.state.countries[this.state.countrySelection.source]
        .state.troops;
      const title = `${this.state.countrySelection.source} conquered ${this.state.countrySelection.target}!`;
      countryConqueredModal = (
        <CountryConqueredModal
          troops={troops}
          title={title}
          countryConqueredModalVisible={
            this.state.modals.countryConqueredVisible
          }
          moveTroopsHandler={this.handleOk}
        />
      );
    } else {
      countryConqueredModal = "";
    }

    // Card Head style
    const cardHeadStyle = { fontWeight: "bold", backgroundColor: "lightblue" };

    const deadline = Date.now() + 1000 * 60 * 3; // 3 minutes (Moment is also OK)
    const countDownTitle = <span style={{ color: "white" }}>Tiempo</span>;

    return (
      <Layout>
        <Header>
          <Row style={{ color: "white" }}>
            <Col span={12}>
              <h1 style={{ color: "white" }}>Teg Online</h1>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={8}>Current round: {this.state.currentRound}</Col>
                <Col span={8}>
                  Current player: &nbsp;
                  <Avatar
                    style={{
                      backgroundColor: this.state.players[
                        this.state.currentPlayerIndex
                      ].color,
                    }}
                    icon={<UserOutlined />}
                  />
                  &nbsp;
                  {this.state.players[this.state.currentPlayerIndex].name}
                </Col>
                <Col span={8}>
                  <Countdown
                    title={countDownTitle}
                    value={deadline}
                    onFinish={this.onCounterFinish}
                    valueStyle={{ color: "white" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Content>
            {countryConqueredModal}
            <div>
              <div>{map}</div>
              <hr />
              <div className="card-container">
                <Tabs type="card">
                  <TabPane tab="Tab Title 1" key="1">
                    <p>Content of Tab Pane 1</p>
                    <p>Content of Tab Pane 1</p>
                    <p>Content of Tab Pane 1</p>
                  </TabPane>
                  <TabPane tab="Cards" key="2">
                    <PlayerCardsTab
                      cards={
                        this.state.players[this.state.currentPlayerIndex].cards
                      }
                      changeCardsHandler={this.exchangeCards}
                    />
                  </TabPane>
                  <TabPane tab="Countries" key="3">
                    {countryList}
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </Content>
          <Sider style={{ color: "white" }}>
            <Card size="small" title="Last Attack" headStyle={cardHeadStyle}>
              <p>Attacker dices: {this.state.dices.attacker.join(", ")}</p>
              <p>Defender dices: {this.state.dices.defender.join(", ")}</p>
            </Card>
            <Card size="small" title="Actions" headStyle={cardHeadStyle}>
              <Tooltip title="Finish Round">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<CheckCircleOutlined twoToneColor="#52c41a" />}
                  style={{ marginRight: "4px" }}
                  onClick={() => this.finishRound()}
                />
              </Tooltip>
              <Tooltip title="Get Card">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<CreditCardOutlined />}
                  style={{ marginRight: "4px" }}
                  onClick={() => this.getCountryCard()}
                  disabled={
                    this.state.currentRound === RoundType.ADD_TROOPS ||
                    !this.state.players[this.state.currentPlayerIndex]
                      .canGetCard
                  }
                />
              </Tooltip>
              <Tooltip title="Exchange Cards">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<UserAddOutlined />}
                  style={{ marginRight: "4px" }}
                  onClick={() => this.exchangeCards()}
                  disabled={
                    this.state.currentRound === RoundType.ADD_TROOPS ||
                    !this.state.players[this.state.currentPlayerIndex]
                      .canGetCard
                  }
                />
              </Tooltip>
            </Card>
            <Card size="small" title="Country" headStyle={cardHeadStyle}>
              <p>Source: {this.state.countrySelection.source}</p>
              <p>Target: {this.state.countrySelection.target}</p>
              <Tooltip title="Add Troops">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<PlusCircleOutlined />}
                  style={{ marginRight: "4px" }}
                  disabled={!this.state.countrySelection.source}
                  onClick={() =>
                    this.addTroops(this.state.countrySelection.source)
                  }
                />
              </Tooltip>
              <Tooltip title="Remove Troops">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<MinusCircleOutlined />}
                  style={{ marginRight: "4px" }}
                  disabled={!this.state.countrySelection.source}
                  onClick={() =>
                    this.removeTroops(this.state.countrySelection.source)
                  }
                />
              </Tooltip>
              <Tooltip title="Move Troops">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<LoginOutlined />}
                  style={{ marginRight: "4px" }}
                  onClick={() => this.moveTroops(1)}
                  disabled={
                    this.state.currentRound === RoundType.ADD_TROOPS ||
                    !this.state.countrySelection.source ||
                    !this.state.countrySelection.target
                  }
                />
              </Tooltip>
              <Tooltip title="Attack">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<ThunderboltOutlined />}
                  onClick={() => this.attack()}
                  disabled={
                    this.state.currentRound !== RoundType.ATTACK ||
                    !this.state.countrySelection.source ||
                    !this.state.countrySelection.target
                  }
                />
              </Tooltip>
            </Card>
            <Players
              players={this.state.players}
              headStyle={cardHeadStyle}
              currentPlayerIndex={this.state.currentPlayerIndex}
            />
            <UserInfo
              troopsToAdd={currentPlayer.troopsToAdd}
              headStyle={cardHeadStyle}
            />
          </Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default TegMap;