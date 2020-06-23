import React, { Component } from 'react';
import _ from 'lodash';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

import { Layout } from 'antd';
import { notification, Modal } from 'antd';
import { Spin } from 'antd';

import Map from './components/Map/Map';
import BottomTabs from './components/BottomTabs/BottomTabs';

import GameHeader from './components/Header/Header';
import GameSider from './components/Sider/GameSider';

import CountryConqueredModal from './components/Modals/CountryConqueredModal';
import SelectPlayerColorModal from './components/Modals/SelectPlayerColorModal';
import GameFinishedModal from './components/Modals/GameFinishedModal';

import Country from './models/Country';
import RoundType from './models/Round';

const { Header, Footer, Content } = Layout;

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

const CardType = {
  SHIP: 'ship',
  CANNON: 'cannon',
  BALLOON: 'balloon',
  WILDCARD: 'wildcard',
};

const CardsForExchange = {
  MIN: 3,
  MAX: 5,
};

const PlayerColors = {
  BLUE: 'blue',
  RED: 'red',
  BLACK: 'black',
  PINK: 'pink',
  YELLOW: 'yellow',
  GREEN: 'green',
};

let client = null;
let gameId = null;

class LayoutWrapper extends Component {
  state = {
    gameStatus: null,
    round: null,
    currentPlayer: null,
    currentPlayerId: null,
    players: [],
    winner: null,
    countrySelection: {
      source: null,
      target: null,
    },
    sourceSelection: null,
    targetSelection: null,
    dices: { attacker: [], defender: [] },
    modals: {
      chooseColorVisible: true,
      countryConqueredVisible: false,
      gameFinishedVisible: false,
    },
    spinners: {
      mapVisible: false,
      selectPlayerColorVisible: true,
    },
    eventsLog: [],
    chatMessages: {
      unreadCount: 0,
      messages: [],
    }
  };

  componentWillMount() {
    // Websocket
    // const query = new URLSearchParams(useLocation().search);
    // debugger;
    // const query = new URLSearchParams(this.props.location.search);
    // console.log(query.get('game_id'));
    // gameId = query.get('game_id');
    // const params = useParams();
    // gameId = params.gameId;
    gameId = this.props.match.params.gameId;
    const endpoint = `${process.env.REACT_APP_WEBSOCKET_ENDPOINT}?game_id=${gameId}`;
    client = new W3CWebSocket(endpoint);
    // gameId = '1234';

    client.onclose = (event) => {
      alert(`Closing. ${JSON.stringify(event)}`);
    }

    client.onerror = (error) => {
      alert(`ERROR. Could not connect to server: ${JSON.stringify(error)}`);
    }

    client.onopen = (data) => {
      console.log('WebSocket Client Connected');
      // console.log('data', data);
      // console.log('props', this.props);
      // this.logInUser('someUsername');

      // Send message to get players
      if (client.readyState === client.OPEN) {
        setTimeout(() => this.sendMessage({ gameId }, 'getPlayers'), 1500);
      }

      // Try to re-connect
      if (false && gameId) {
        const localStorageKey = `teg-id-${gameId}`;
        const localStorageData = localStorage.getItem(localStorageKey);
        if (localStorageData) {
          console.log('From localstorage!');
          // localStorage.removeItem(localStorageKey);
          const parsedData = JSON.parse(localStorageData);
          console.log('sendind parsed data', parsedData);
          this.sendMessage({
            gameId,
            color: parsedData.color,
            cachedConnectionId: parsedData.connectionId,
          }, 'reConnect');
        }
      }
    };

    client.onmessage = (message) => {
      console.log('recibido');
      if (message && message.data) {
        const messageData = JSON.parse(message.data);
        if (messageData.body) {
          console.log('data', JSON.parse(message.data));

          const { action } = messageData;

          debugger;
          if (action === 'joinGame') {
            if (messageData.body.players) {
              const { players, gameStatus } = messageData.body;
              this.setState({ players, gameStatus });
            } else {
              this.setState({ players: [] });
            }

            // Set guests
            const { guests } = messageData.body;
            this.setState({ guests });
          } else if (action === 'gameStarted') {
            debugger;
            const { players, countries, round, gameStatus, eventsLog } = messageData.body;

            this.setState({ players, countries, round, gameStatus, eventsLog });
          } else if (action === 'connectionId') {
            const { connectionId } = messageData.body;
            const modals = { ...this.state.modals };
            modals.chooseColorVisible = false;

            const currentPlayer = _.find(
              this.state.players,
              (obj) => obj.id === connectionId,
            );

            this.setState({
              currentPlayerId: connectionId,
              modals,
              currentPlayer,
            });

            // Set local storage
            const localStorageKey = `teg-id-${gameId}`;
            const localStorageItem = { connectionId, color: currentPlayer.color }
            localStorage.setItem(localStorageKey, JSON.stringify(localStorageItem));
            console.log(`Set ${localStorageKey} - ${connectionId}`);

            // Show notification
            if (this.state.players[this.state.round.playerIndex].color === this.state.currentPlayer.color) {
              this.showStartTurnNotifiction(this.state.round.type);
            }
          } else if (action === 'countryAttacked') {
            const {
              gameStatus,
              winner,
              attacker,
              defender,
              dices,
              players,
              countryConquered,
            } = messageData.body;

            // A player was killed and attacker won the game
            if (winner && gameStatus === 'finished') {
              console.log('game finished!');
              const modals = { ...this.state.modals };
              modals.gameFinishedVisible = true;
              
              this.setState({ modals, winner });
            } else {
              const countries = [ ...this.state.countries ];
              const modals = { ...this.state.modals };
              const attackerIndex = _.findIndex(countries, { countryKey: attacker.countryKey });
              const defenderIndex = _.findIndex(countries, { countryKey: defender.countryKey });

              countries[attackerIndex] = attacker;
              countries[defenderIndex] = defender;

              // Show modal to select troops to move after conquer
              if (
                countryConquered &&
                attacker.state.player.color === this.state.currentPlayer.color &&
                attacker.state.troops > 1
              ) {
                // Show modal to select troops to move
                modals.countryConqueredVisible = true;
              }

              this.setState({ countries, dices, modals, players });
            }
          } else if (action === 'troopsMoved') {
            // const { countries } = messageData.body;
            // const { source, target, count, round, eventsLog } = messageData.body;
            const { source, target, round, eventsLog } = messageData.body;
            const countries = [ ...this.state.countries ];

            const sourceIndex = _.findIndex(countries, { countryKey: source.countryKey });
            const targetIndex = _.findIndex(countries, { countryKey: target.countryKey });

            countries[sourceIndex] = source;
            countries[targetIndex] = target;

            this.setState({ countries, round, eventsLog });

            // Hide spinner
            this.setMapSpinnerVisibility(false);
          } else if (action === 'roundFinished') {
            const { round, players, gameStatus } = messageData.body;

            // Game finished
            if (gameStatus === 'finished') {
              const { winner } = messageData.body;
              console.log('game finished!');
              const modals = { ...this.state.modals };
              modals.gameFinishedVisible = true;
              
              this.setState({ modals, winner });
            } else {
              // Clear selection
              const countrySelection = { source: null, target: null };

              this.setState({ round, players, countrySelection });
            }

            // Hide spinner
            this.setMapSpinnerVisibility(false);

            // Show notification
            if (players[round.playerIndex].color === this.state.currentPlayer.color) {
              this.showStartTurnNotifiction(round.type);
            }
          } else if (action === 'troopsAdded') {
            const { players, countries, eventsLog } = messageData.body;

            this.setState({ players, countries, eventsLog });

            // Hide spinner
            this.setMapSpinnerVisibility(false);
          } else if (action === 'playerDisconnected') {
            const { players, disconnectedPlayerName } = messageData.body;

            this.setState({ players });

            // Notification
            notification.info({
              message: `Player disconnected`,
              description: `Player ${disconnectedPlayerName} got disconnected`,
              placement: 'topLeft',
            });
          } else if (action === 'guestDisconnected') {
            // Guest disconnected
            const { isAdmin } = messageData.body;
            
            // If it was the admin, cancel game
            if (isAdmin) {
              const modals = { ...this.state.modals };
              modals.chooseColorVisible = false;

              this.setState({ modals });

              // Error modal
              Modal.error({
                title: 'Admin disconnected',
                content: 'Admin is offline, game is cancelled',
                onOk: () => console.log('bye!'),
              });
            }
          } else if (action === 'sync') {
            const { players, countries, round, currentPlayerId, eventsLog } = messageData.body;
            const modals = { ...this.state.modals };
            modals.chooseColorVisible = false;

            const currentPlayer = _.find(
              players,
              (obj) => obj.id === currentPlayerId,
            );

            this.setState({
              players,
              countries,
              round,
              currentPlayerId,
              modals,
              currentPlayer,
              eventsLog,
            });
          } else if (action === 'reJoinGame') {
            const { reConnectedPlayerName, players } = messageData.body;

            // Notification
            notification.info({
              message: `Player connected`,
              description: `Player ${reConnectedPlayerName} back online`,
              placement: 'topLeft',
            });

            this.setState({ players });
          } else if (action === 'cardReceived') {
            const { players, playerName, round } = messageData.body;

            if (players) {
              // Message to the player that got the card
              this.setState({ players });
              // Get player index
            } else if (playerName) {
              // Message to everyone else
              notification.info({
                message: `Country card`,
                description: `Player ${playerName} got a card`,
                placement: 'topLeft',
              });
            }

            if (round) {
              this.setState({ round });
            }
          } else if (action === 'cardExchanged') {
            const { players, countries } = messageData.body;

            // Message to everyone
            notification.info({
              message: `Country card`,
              description: `Card exchanged`,
              placement: 'topLeft',
            });

            this.setState({ countries, players });
          } else if (action === 'cardsExchanged') {
            const { players } = messageData.body;

            // Message to everyone
            notification.info({
              message: `Country card`,
              description: `Cards exchanged`,
              placement: 'topLeft',
            });

            this.setState({ players });
          } else if (action === 'playersInfo') {
            const { players, currentPlayer, gameStatus } = messageData.body;
            const spinners = { ...this.state.spinners };
            spinners.selectPlayerColorVisible = false;

            this.setState({ players, currentPlayer, gameStatus, spinners });
          } else if (action === 'messageReceived') {
            const { player, message } = messageData.body;
            const chatMessages = { ...this.state.chatMessages };
            // Increment unread count
            chatMessages.unreadCount += 1;
            // Add message to beginning of array
            chatMessages.messages.unshift({
              title: player.name,
              color: player.color,
              text: message,
            });
            
            this.setState({ chatMessages });
          }
          
        }
      }
    };
  }

  sendMessage = (data, action) => {
    client.send(
      JSON.stringify({
        data,
        action,
      }),
    );
  };

  componentDidMount() {
    const countries = [];

    // Set countries, players status and country cards
    Object.keys(CountriesList).forEach((continentKey) => {
      Object.keys(CountriesList[continentKey].countries).forEach(
        (countryKey) => {
          countries.push({
            countryKey,
            name: CountriesList[continentKey].countries[countryKey],
            state: {
              player: null,
              troops: 0,
              newTroops: 0,
            },
          });
        },
      );
    });

    this.setState({ countries });
  }

  showStartTurnNotifiction = (roundType) => {
    let description = null;

    if (roundType === RoundType.FIRST_ADD_TROOPS) {
      description = 'Please add 5 troops';
    } else if (roundType === RoundType.SECOND_ADD_TROOPS) {
      description = 'Please add 3 troops';
    } else if (roundType === RoundType.ADD_TROOPS) {
      description = 'Please add troops';
    } else if (roundType === RoundType.ATTACK) {
      description = 'You can attack or move troops';
    }

    // Notification
    notification.info({
      message: 'Your turn!',
      description,
      placement: 'topLeft',
    });
  }

  countryClicked = (countryKey) => {
    const player = this.state.currentPlayer;
    const countrySelection = { ...this.state.countrySelection };
    const country = _.find(this.state.countries, { countryKey: countryKey });

    if ([RoundType.ATTACK, RoundType.MOVE_TROOPS].includes(this.state.round.type)) {
      if (!this.state.countrySelection.source) {
        // Check country belongs to player
        if (country.state.player.color === player.color) {
          // Select source
          countrySelection.source = countryKey;
        }
      } else if (!this.state.countrySelection.target) {
        if (!Country.areNeighbours(this.state.countrySelection.source, countryKey)) {
          // If they are not neighbours, reset source selection
          countrySelection.source = countryKey;
        }
        else if (this.state.countrySelection.source !== this.state.countrySelection.target) {
          // Select destiny
          countrySelection.target = countryKey;
        }
      } else {
        // Check country belongs to player
        if (country.state.player.color === player.color) {
          // Select source and clear destiny
          countrySelection.source = countryKey;
          countrySelection.target = '';
        }
      }
    } else if ([RoundType.ADD_TROOPS, RoundType.FIRST_ADD_TROOPS, RoundType.SECOND_ADD_TROOPS].includes(this.state.round.type)) {
      // Check country belongs to player
      if (country.state.player.color === player.color) {
        // Select source and clear destiny
        countrySelection.source = countryKey;
        countrySelection.target = '';
      }
    }

    this.setState({ countrySelection });
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

  getCountriesByPlayer(playerIndex) {
    const player = this.state.players[playerIndex];
    const countries = [];

    Object.keys(this.state.countries).forEach((countryKey) => {
      const country = this.state.countries[countryKey];
      if (country.state.player.id === player.id) {
        countries.push(country);
      }
    });

    return countries;
  }

  finishRound = () => {
    // Set spinner visible
    this.setMapSpinnerVisibility(true);

    console.log('Finish turn MSG');
    const player = _.find(this.state.players, (obj) => obj.id === this.state.currentPlayerId);

    this.sendMessage({
        gameId,
        playerId: this.state.currentPlayerId,
        playerColor: player.color,
      },
      'finishRound',
    );
  };

  /** Send message to add troops */
  addTroops = (countryName) => {
    // Set spinner visible
    this.setMapSpinnerVisibility(true);

    console.log('Add troops MSG');
    const player = _.find(this.state.players, (obj) => obj.id === this.state.currentPlayerId);

    if (player) {
      this.sendMessage(
        {
          gameId,
          country: countryName,
          count: 1,
          playerColor: player.color,
        },
        'addTroops',
      );
    } else {
      // TODO. Handle error
    }
  };

  removeTroops = (countryName) => {
    console.log('Remove troops MSG');
    
    // Set spinner visible
    this.setMapSpinnerVisibility(true);

    const player = _.find(this.state.players, (obj) => obj.id === this.state.currentPlayerId);

    if (player) {
      this.sendMessage(
        {
          gameId,
          country: countryName,
          count: -1,
          playerColor: player.color,
        },
        'addTroops',
      );
    } else {
      // TODO. Handle error
    }
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
      `${this.state.countrySelection.source} attacks ${this.state.countrySelection.target}`,
    );
    console.log('Attack!');

    const player = _.find(this.state.players, (obj) => obj.id === this.state.currentPlayerId);

    if (player) {
      this.sendMessage(
        {
          gameId,
          playerColor: player.color,
          attacker: this.state.countrySelection.source,
          defender: this.state.countrySelection.target,
        },
        'attack',
      );
    } else {
      // TODO. Handle error
    }
  };

  setMapSpinnerVisibility = (mapVisible) => {
    const spinners = { ...this.state.spinners };

    spinners.mapVisible = mapVisible;

    this.setState({ spinners });
  }

  moveTroops = (troopsToMove) => {
    console.log(
      `Moving from ${this.state.countrySelection.source} to ${this.state.countrySelection.target}`,
    );

    const player = _.find(this.state.players, (obj) => obj.id === this.state.currentPlayerId);

    if (player) {
      this.sendMessage(
        {
          gameId,
          playerColor: player.color,
          source: this.state.countrySelection.source,
          target: this.state.countrySelection.target,
          count: troopsToMove,
        },
        'moveTroops',
      );
    } else {
      // TODO. Handle error
    }
  };

  getCountryCard = () => {
    console.log('Get card');

    const player = _.find(this.state.players, (obj) => obj.id === this.state.currentPlayerId);

    if (player) {
      this.sendMessage({ gameId, playerColor: player.color, }, 'getCard');
    } else {
      // TODO. Handle error
    }
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
    console.log(`Exchange cards`, cards);
    const player = _.find(this.state.players, (obj) => obj.id === this.state.currentPlayerId);

    if (player) {
      this.sendMessage(
        {
          gameId,
          playerColor: player.color,
          cards,
        },
        'exchangeCards',
      );
    } else {
      // TODO. Handle error
    }
  };

  exchangeCard = (card) => {
    console.log(`Exchange card ${card}`);
    const player = _.find(this.state.players, (obj) => obj.id === this.state.currentPlayerId);

    if (player) {
      this.sendMessage(
        {
          gameId,
          playerColor: player.color,
          card,
        },
        'exchangeCard',
      );
    } else {
      // TODO. Handle error
    }
  }

  throwDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  tabChangeCallback = (key) => {
    console.log(key);
  };

  // TODO. Rename this
  moveTroopsAfterConquest = (troopsToMove) => {
    console.log(`move ${troopsToMove} troops`);

    const player = _.find(this.state.players, (obj) => obj.id === this.state.currentPlayerId);

    if (player) {
      this.sendMessage(
        {
          gameId,
          playerColor: player.color,
          source: this.state.countrySelection.source,
          target: this.state.countrySelection.target,
          count: troopsToMove,
          conquest: true,
        },
        'moveTroops',
      );
    } else {
      // TODO. Handle error
    }

    // Close modal
    const modals = { ...this.state.modals };
    modals.countryConqueredVisible = false;

    this.setState({ modals });
  };

  openNotification = (placement) => {
    notification.info({
      message: `Notification ${placement}`,
      description: 'Time out!',
      placement,
    });
  };

  onCounterFinish = () => {
    console.log('Time out!');
    // Notification
    // this.openNotification('topLeft');
    // this.finishRound();
  };

  changeCountryCard = (country) => {
    console.log('cambio ' + country);
    const countries = [ ...this.state.countries ];
    const cardCountry = _.find(countries, function (o) {
      return o.countryKey === country;
    });

    if (!cardCountry) {
      // TODO. Handle error
      return null;
    }

    const players = [...this.state.players];
    const player = players[this.state.round.playerIndex];

    if (cardCountry.state.player.name !== player.name) {
      // TODO. Handle error
      console.error('Player does not have this country');
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

  joinGameHandler = (username, color) => {
    // Send message
    this.sendMessage(
      { gameId, username, color: PlayerColors[color] },
      'joinGame',
    );
    console.log('username', username);
    console.log('color', color);
  };

  reConnect = (color) => {
    // Send message
    this.sendMessage({ gameId, color: PlayerColors[color] }, 'reConnect');
  };

  /** Send message to start a game */
  startGame = () => {
    // Send message
    console.log('START GAME MSG');
    this.sendMessage({ gameId }, 'startGame');
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  sendChatMessage = (message) => {
    this.sendMessage({ gameId, message }, 'chatMessage');
  }

  markChatMessagesAsRead = () => {
    const chatMessages = { ...this.state.chatMessages };
    if (chatMessages.unreadCount > 0) {
      // Mark all as read
      chatMessages.unreadCount = 0;

      this.setState({ chatMessages });
    }
  };

  render() {
    let currentPlayer;

    if (this.state.countries) {
      currentPlayer = _.find(
        this.state.players,
        (obj) => obj.id === this.state.currentPlayerId,
      );
    }

    const source = _.find(this.state.countries, (obj) => obj.countryKey === this.state.countrySelection.source);

    const troops = this.state.countries && source ? source.state.troops : 0;
    const title = `${this.state.countrySelection.source} conquered ${this.state.countrySelection.target}!`;

    const modals = (
      <div>
        <SelectPlayerColorModal
          visible={this.state.modals.chooseColorVisible}
          gameStatus={this.state.gameStatus}
          players={this.state.players}
          isAdmin={this.state.currentPlayer && this.state.currentPlayer.isAdmin}
          startGameHander={this.startGame}
          joinGameHandler={this.joinGameHandler}
          reConnectHandler={this.reConnect}
          spinnerVisible={this.state.spinners.selectPlayerColorVisible}
        />
        <CountryConqueredModal
          troops={troops}
          title={title}
          countryConqueredModalVisible={
            this.state.modals.countryConqueredVisible
          }
          moveTroopsHandler={this.moveTroopsAfterConquest}
        />
        <GameFinishedModal
          visible={this.state.modals.gameFinishedVisible}
          winner={this.state.winner}
          okHandler={this.reConnect} />
      </div>
    );

    // Count player countries
    let playerCountries = 0;

    if (this.state.countries && currentPlayer) {
      _.forIn(this.state.countries, (value, key) => {
        if (value.state.player.color === currentPlayer.color) {
          playerCountries += 1;
        }
      });
    }

    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <GameHeader
            round={this.state.round}
            players={this.state.players}
            onCounterFinish={this.onCounterFinish}
            currentPlayer={this.state.currentPlayer}
            finishRoundHandler={this.finishRound}
          />
        </Header>
        <Layout>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            {modals}
            <div>
              <div>
                <Spin spinning={this.state.spinners.mapVisible}>
                  <Map
                    countries={this.state.countries}
                    countrySelection={this.state.countrySelection}
                    countryClickedHandler={this.countryClicked} />
                </Spin>
              </div>
              <hr />
              <BottomTabs
                players={this.state.players}
                currentPlayerId={this.state.currentPlayerId}
                eventsLog={this.state.eventsLog}
                changeCardHandler={this.exchangeCard}
                changeCardsHandler={this.exchangeCards}
                sendChatMessageHandler={this.sendChatMessage}
                markChatMessagesAsReadHandler={this.markChatMessagesAsRead}
                chatMessages={this.state.chatMessages}
              />
            </div>
          </Content>
          <GameSider
            dices={this.state.dices}
            currentPlayer={this.state.currentPlayer}
            players={this.state.players}
            round={this.state.round}
            countrySelection={this.state.countrySelection}
            currentPlayerId={this.state.currentPlayerId}
            addTroopsHandler={this.addTroops}
            removeTroopsHandler={this.removeTroops}
            attackHandler={this.attack}
            moveTroopsHandler={this.moveTroops}
            exchangeCardsHandler={this.exchangeCards}
            getCountryCardHandler={this.getCountryCard}
            countriesCount={playerCountries}
            countries={this.state.countries}
          />
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default LayoutWrapper;
