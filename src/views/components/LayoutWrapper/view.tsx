import React, { Component } from 'react';
import _ from 'lodash';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

import { Layout } from 'antd';
import { notification, Modal } from 'antd';
import { Spin, Alert } from 'antd';

import Map from '../Map';
import BottomTabs from '../BottomTabs';

import GameHeader from '../Header';
import GameSider from '../Sider/GameSider';

// import CountryConqueredModal from '../Modals/CountryConqueredModal';
// import SelectPlayerColorModal from '../Modals/SelectPlayerColorModal';
// import GameFinishedModal from '../Modals/GameFinishedModal';
// import CountryCardsModal from '../Modals/CountryCardsModal';
import Modals from '../Modals';

import RoundType, { Round } from 'src/models/Round';

import ButtonsRow from '../ButtonsRow';
import Player from 'src/models/Player';
import { NotificationPlacement } from 'antd/lib/notification';
import { SetCurrentPlayerId, SetGameId } from 'src/state/game/actions';
import { ChatMessage } from 'src/models/ChatMessage';
import { SelectCountry } from 'src/ops/country-selection/actions';
import { SetSource, SetTarget } from 'src/state/country-selection/actions';

import WebsocketService from 'src/services/websocket';
import { ConnectionIDReceived, CountryAttacked, GameStarted, GameSync, InitGame, JoinedGame, PlayersInfoReceived, TroopsMoved } from 'src/ops/game/actions';
import CountryService from 'src/services/game/countryService';
import { SetChooseColorOpen } from 'src/state/modals/actions';

const { Header, Footer, Content } = Layout;

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

const PlayerColors: { [key: string]: string } = {
    BLUE: 'blue',
    RED: 'red',
    BLACK: 'black',
    PINK: 'pink',
    YELLOW: 'yellow',
    GREEN: 'green',
};

let client: W3CWebSocket | null = null;
let gameId: string | null = null;

interface CountrySelection {
    source: string;
    target: string;
}

export interface Props {
    match: {
        params: { gameId: string };
    };
    countries: any;
    players: Player[];
    round: Round;
    currentPlayer: Player | undefined;
    gameStatus: string;
    eventsLog: any[];
    currentPlayerId: string;
    countrySelection: CountrySelection;

    countryConqueredModalVisible: boolean;
    countryCardsVisible: boolean;

    initGame: (payload: InitGame['payload']) => void;
    setPlayers: (payload: { players: Player[] }) => void;
    setCountries: (payload: { countries: {}[] }) => void;
    setRound: (payload: { round: Round }) => void;
    setCurrentPlayer: (payload: { currentPlayer: Player }) => void;
    setGameStatus: (payload: { gameStatus: string }) => void;
    setCurrentPlayerId: (payload: SetCurrentPlayerId['payload']) => void;
    selectCountry: (payload: SelectCountry['payload']) => void;
    setSource: (payload: SetSource['payload']) => void;
    setTarget: (payload: SetTarget['payload']) => void;

    setGameId: (payload: SetGameId['payload']) => void;
    playersInfoReceived: (payload: PlayersInfoReceived['payload']) => void;
    joinedGame: (payload: JoinedGame['payload']) => void;

    countryAttacked: (payload: CountryAttacked['payload']) => void;
    troopsMoved: (payload: TroopsMoved['payload']) => void;

    // Modals
    setChooseColorOpen: (payload: SetChooseColorOpen['payload']) => void;
}

interface State {
    modals: {
        // chooseColorVisible: boolean;
        // countryConqueredVisible: boolean;
        gameFinishedVisible: boolean;
        // countryCardsVisible: boolean;
    };
    eventsLog: [];
    chatMessages: {
        unreadCount: number;
        messages: ChatMessage[];
    };
    winner: string;
    attacking: boolean;
    /*
    countrySelection: {
      source: string | null;
      target: string | null;
    };
    */
    // currentPlayerId: string;
    spinners: {
        mapVisible: boolean;
        selectPlayerColorVisible: boolean;
    };
}

interface CountryState {
    player: Player;
    troops: number;
}

class LayoutWrapper extends Component<Props, State> {
    state = {
        // gameStatus: null,
        // round: { playerIndex: -1 } as Round,
        // currentPlayer: {} as Player,
        currentPlayerId: '',
        // players: [] as Player[],
        winner: '',
        countrySelection: {
            source: '',
            target: '',
        },
        sourceSelection: '',
        targetSelection: '',
        modals: {
            // chooseColorVisible: true,
            // countryConqueredVisible: false,
            gameFinishedVisible: false,
            // countryCardsVisible: false,
        },
        spinners: {
            mapVisible: false,
            selectPlayerColorVisible: true,
        },
        attacking: false,
        eventsLog: [] as [],
        chatMessages: {
            unreadCount: 0,
            messages: [] as { title: string, color: string, text: string }[],
        }
    };

    componentWillMount() {
        // Websocket
        // const query = new URLSearchParams(useLocation().search);
        // const query = new URLSearchParams(this.props.location.search);
        // console.log(query.get('game_id'));
        // gameId = query.get('game_id');
        // const params = useParams();
        // gameId = params.gameId;
        gameId = this.props.match.params.gameId;
        // this.props.initGame({ gameId, countries: [], players: [] });
        this.props.setGameId({ gameId });
        const endpoint = `${process.env.REACT_APP_WEBSOCKET_ENDPOINT}?game_id=${gameId}`;
        // client = new W3CWebSocket(endpoint);

        const onMessageActions = {
            joinGame: (body: JoinedGame['payload']) => {
                console.log('join game received!');
                const { gameStatus, players } = body;
                this.props.joinedGame({ gameStatus, players });
            },
            gameStarted: (body: GameStarted['payload']) => {
                const { players, countries, round, gameStatus, eventsLog } = body;

                // this.setState({ players, countries, round, gameStatus, eventsLog });
                this.setState({ eventsLog });

                // this.props.setGameStatus({ gameStatus });
                this.props.initGame({ round, gameStatus, gameId: gameId || '', countries, players });
                // this.props.setRound({ round });

                // Show mission
                this.showPlayerMission(players);
            },
            connectionId: (body: ConnectionIDReceived['payload']) => {
                const { connectionId } = body;
                // const modals = { ...this.state.modals };
                // modals.chooseColorVisible = false;

                const currentPlayer = _.find(
                    this.props.players,
                    (obj: Player) => obj.id === connectionId,
                );

                /*
                this.setState({
                    // currentPlayerId: connectionId,
                    modals,
                    // currentPlayer,
                });
                */
                this.props.setChooseColorOpen({ isOpen: false });

                this.props.setCurrentPlayerId({ currentPlayerId: connectionId });

                if (currentPlayer) {
                    this.props.setCurrentPlayer({ currentPlayer });
                }

                // Set local storage
                const localStorageKey = `teg-id-${gameId}`;
                const localStorageItem = { connectionId, color: currentPlayer?.color }
                localStorage.setItem(localStorageKey, JSON.stringify(localStorageItem));
                console.log(`Set ${localStorageKey} - ${connectionId}`);

                // Show notification
                if (this.props.currentPlayer && this.props.players[this.props.round.playerIndex].color === this.props.currentPlayer.color) {
                    this.showStartTurnNotifiction(this.props.round.type);
                }
            },
            countryAttacked: (body: any) => {
                const {
                    gameStatus,
                    winner,
                    attacker,
                    defender,
                    dices,
                    players,
                    countryConquered,
                    eventsLog,
                } = body;

                this.props.countryAttacked({
                    gameStatus,
                    winner,
                    attacker,
                    defender,
                    dices,
                    players,
                    countryConquered,
                    eventsLog,
                });

                if (!(winner && gameStatus === 'finished')) {
                    // Show notification
                    notification.info({
                        message: `${attacker.countryKey} attacked ${defender.countryKey}`,
                        description: '',
                        // description: `${dices.attacker.join(' - ')} vs ${dices.defender.join(' - ')}`,
                        placement: 'bottomLeft',
                    });
                }

                setTimeout(() => {
                    // Country conquered, show notification
                    if (countryConquered) {
                        notification.info({
                            message: 'Country conquered!',
                            description: `${attacker.countryKey} conquered ${defender.countryKey}`,
                            placement: 'bottomLeft',
                        });
                    }
                }, 1000);

                /*
                // A player was killed and attacker won the game
                if (winner && gameStatus === 'finished') {
                  console.log('game finished!');
                  const modals = { ...this.state.modals };
                  modals.gameFinishedVisible = true;
                  
                  this.setState({ modals, winner });
                } else {
                  this.setMapSpinnerVisibility(true);
                  this.setState({ attacking: true, dices });
                  const countries = [ ...this.props.countries ];
                  const modals = { ...this.state.modals };
                  const attackerIndex = _.findIndex(countries, { countryKey: attacker.countryKey });
                  const defenderIndex = _.findIndex(countries, { countryKey: defender.countryKey });
  
                  countries[attackerIndex] = attacker;
                  countries[defenderIndex] = defender;
  
                  // Show notification
                  notification.info({
                    message: `${attacker.countryKey} attacked ${defender.countryKey}`,
                    description: '',
                    // description: `${dices.attacker.join(' - ')} vs ${dices.defender.join(' - ')}`,
                    placement: 'bottomLeft',
                  });
  
                  // Show modal to select troops to move after conquer
                  if (
                    countryConquered &&
                    this.props.currentPlayer && attacker.state.player.color === this.props.currentPlayer.color &&
                    attacker.state.troops > 1
                  ) {
                    // Show modal to select troops to move
                    modals.countryConqueredVisible = true;
                  }
  
                  setTimeout(() => {
                    // Country conquered, show notification
                    if (countryConquered) {
                      notification.info({
                        message: 'Country conquered!',
                        description: `${attacker.countryKey} conquered ${defender.countryKey}`,
                        placement: 'bottomLeft',
                      });
                    }
                    // Set spinner not visible
                    this.setMapSpinnerVisibility(false);
                    // this.setState({ countries, dices, modals, players, eventsLog, attacking: false });
                    this.setState({ dices, modals, eventsLog, attacking: false });
                    this.props.setPlayers({ players });
                    this.props.setCountries({ countries });
                  }, 1000);
                }
                */
            },
            troopsMoved: (body: any) => {
                const { source, target, round, eventsLog } = body;

                this.props.troopsMoved({ source, target, round, eventsLog });


                /*
                const countries = [...this.props.countries];

                const sourceIndex = _.findIndex(countries, { countryKey: source.countryKey });
                const targetIndex = _.findIndex(countries, { countryKey: target.countryKey });

                countries[sourceIndex] = source;
                countries[targetIndex] = target;

                // Close modal if country was conquered
                const modals = { ...this.state.modals };
                modals.countryConqueredVisible = false;

                this.setState({ countries, round, eventsLog, modals });
                this.props.setCountries({ countries });
                this.props.setRound({ round });

                // Hide spinner
                this.setMapSpinnerVisibility(false);
                */
            },
            roundFinished: (body: any) => {
                const { round, players, gameStatus, winner } = body;

                // Game finished
                if (gameStatus === 'finished' && winner) {
                    console.log('game finished!');
                    const modals = { ...this.state.modals };
                    modals.gameFinishedVisible = true;

                    this.setState({ modals, winner });
                } else {
                    // Clear selection
                    // const countrySelection = { source: null, target: null };

                    // this.setState({ /*round, players,*/ countrySelection });
                    this.props.setPlayers({ players });
                    this.props.setRound({ round });
                    // Clear selection
                    this.props.setSource({ source: '' });
                    this.props.setTarget({ target: '' });
                }

                // Hide spinner
                this.setMapSpinnerVisibility(false);

                // Show notification
                if (this.props.currentPlayer && players[round.playerIndex].color === this.props.currentPlayer.color) {
                    this.showStartTurnNotifiction(round.type);
                }
            },
            troopsAdded: (body: any) => {
                const { players, countries, eventsLog } = body;

                // this.setState({ players, countries, eventsLog });
                this.setState({ eventsLog });
                this.props.setCountries({ countries });
                this.props.setPlayers({ players });

                // Hide spinner
                this.setMapSpinnerVisibility(false);
            },
            playerDisconnected: (body: any) => {
                const { players, disconnectedPlayerName } = body;

                // this.setState({ players });
                this.props.setPlayers({ players });

                // Notification
                notification.info({
                    message: `Player disconnected`,
                    description: `Player ${disconnectedPlayerName} got disconnected`,
                    placement: 'bottomLeft',
                });
            },
            guestDisconnected: (body: any) => {
                const { isAdmin } = body;

                // If it was the admin, cancel game
                if (isAdmin) {
                    // const modals = { ...this.state.modals };
                    // modals.chooseColorVisible = false;

                    // this.setState({ modals });

                    this.props.setChooseColorOpen({ isOpen: false });

                    // Error modal
                    Modal.error({
                        title: 'Admin disconnected',
                        content: 'Admin is offline, game is cancelled',
                        onOk: () => console.log('bye!'),
                    });
                }
            },
            sync: (body: GameSync['payload']) => {
                const { players, countries, round, currentPlayerId, eventsLog } = body;
                // const modals = { ...this.state.modals };
                // modals.chooseColorVisible = false;

                const currentPlayer = _.find(
                    players,
                    (obj) => obj.id === currentPlayerId,
                );

                this.setState({
                    // players,
                    // countries,
                    // round,
                    // currentPlayerId,
                    // modals,
                    // currentPlayer,
                    eventsLog,
                });

                this.props.setChooseColorOpen({ isOpen: false });
                this.props.setPlayers({ players });
                this.props.setCountries({ countries });
                this.props.setRound({ round });
                this.props.setCurrentPlayerId({ currentPlayerId });
                if (currentPlayer) {
                    this.props.setCurrentPlayer({ currentPlayer });
                }
            },
            reJoinGame: (body: any) => {
                const { reConnectedPlayerName, players } = body;

                // Notification
                notification.info({
                    message: `Player connected`,
                    description: `Player ${reConnectedPlayerName} back online`,
                    placement: 'bottomLeft',
                });

                // this.setState({ players });
                this.props.setPlayers({ players });
            },
            cardReceived: (body: any) => {
                const { players, playerName, round } = body;

                if (players) {
                    // Message to the player that got the card
                    this.props.setPlayers({ players });
                    // this.setState({ players });
                    // Get player index
                } else if (playerName) {
                    // Message to everyone else
                    notification.info({
                        message: `Country card`,
                        description: `Player ${playerName} got a card`,
                        placement: 'bottomLeft',
                    });
                }

                if (round) {
                    // this.setState({ round });
                    this.props.setRound({ round });
                }
            },
            cardExchanged: (body: any) => {
                const { players, countries } = body;

                // Message to everyone
                notification.info({
                    message: `Country card`,
                    description: `Card exchanged`,
                    placement: 'bottomLeft',
                });

                // this.setState({ countries, players });
                this.props.setPlayers({ players });
                this.props.setCountries({ countries });
            },
            cardsExchanged: (body: any) => {
                const { players } = body;

                // Message to everyone
                notification.info({
                    message: `Country card`,
                    description: `Cards exchanged`,
                    placement: 'bottomLeft',
                });

                // this.setState({ players });
                this.props.setPlayers({ players });
            },
            playersInfo: (body: PlayersInfoReceived['payload']) => {
                const { currentPlayer, gameStatus, players } = body;
                this.props.playersInfoReceived({ gameStatus, players, currentPlayer });

                /*
                const { players, currentPlayer, gameStatus } = messageData.body;
                  const spinners = { ...this.state.spinners };
                  spinners.selectPlayerColorVisible = false;
    
                  // this.setState({ players, currentPlayer, gameStatus, spinners });
                  this.props.setPlayers({ players });
                  this.props.setCurrentPlayer({ currentPlayer });
                  this.props.setGameStatus({ gameStatus });
                */
            },
            messageReceived: (body: any) => {
                const { player, message } = body;
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
            },
            error: (body: any) => {
                const { errorMsg } = body;

                // Error message
                notification.error({
                    message: 'Error',
                    description: errorMsg,
                    placement: 'bottomLeft',
                });

                // Hide spinner
                this.setMapSpinnerVisibility(false);
            },
        };

        new WebsocketService(
            endpoint,
            gameId,
            onMessageActions, // TODO. Create OnMessageActions
        );

        // gameId = '1234';

        /*
        client = new W3CWebSocket(endpoint + 'a');
    
        client.onclose = (event) => {
          // alert(`Closing. ${JSON.stringify(event)}`);
        }
    
        client.onerror = (error) => {
          alert(`ERROR. Could not connect to server: ${JSON.stringify(error)}`);
        }
    
        client.onopen = () => {
          console.log('WebSocket Client Connected');
          // console.log('data', data);
          // console.log('props', this.props);
          // this.logInUser('someUsername');
    
          // Send message to get players
          if (client && client.readyState === client.OPEN) {
            setTimeout(() => this.sendMessage({ gameId }, 'getPlayers'), 500);
          }
    
          // Try to re-connect
          // /*
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
          // // ASTERISK
        };
    
        client.onmessage = (message) => {
          console.log('recibido');
          if (message && message.data) {
            const messageData = JSON.parse(message.data as string);
            if (messageData.body) {
              console.log('data', JSON.parse(message.data as string));
    
              const { action } = messageData;
    
              switch (action) {
                case 'joinGame': {
                  // DONE
                  if (messageData.body.players) {
                    const { players, gameStatus } = messageData.body;
                    // this.setState({ players, gameStatus });
                    // this.setState({ gameStatus });
                    this.props.setGameStatus({ gameStatus });
                    this.props.setPlayers({ players });
                  } else {
                    // this.setState({ players: [] });
                    this.props.setPlayers({ players: [] });
                  }
    
                  // Set guests
                  // const { guests } = messageData.body;
                  // this.setState({ guests });
                  break;
                }
                case 'gameStarted': {
                  // DONE
                  const { players, countries, round, gameStatus, eventsLog } = messageData.body;
    
                  // this.setState({ players, countries, round, gameStatus, eventsLog });
                  this.setState({ eventsLog });
    
                  this.props.setGameStatus({ gameStatus });
                  this.props.initGame({ gameId: gameId || '', countries, players });
                  this.props.setRound({ round });
    
                  // Show mission
                  this.showPlayerMission(players);
                  break;
                }
                case 'connectionId': {
                  // DONE
                  const { connectionId } = messageData.body;
                  const modals = { ...this.state.modals };
                  modals.chooseColorVisible = false;
    
                  const currentPlayer = _.find(
                    this.props.players,
                    (obj: Player) => obj.id === connectionId,
                  );
    
                  this.setState({
                    // currentPlayerId: connectionId,
                    modals,
                    // currentPlayer,
                  });
    
                  this.props.setCurrentPlayerId({ currentPlayerId: connectionId });
    
                  if (currentPlayer) {
                    this.props.setCurrentPlayer({ currentPlayer });
                  }
    
                  // Set local storage
                  const localStorageKey = `teg-id-${gameId}`;
                  const localStorageItem = { connectionId, color: currentPlayer?.color }
                  localStorage.setItem(localStorageKey, JSON.stringify(localStorageItem));
                  console.log(`Set ${localStorageKey} - ${connectionId}`);
    
                  // Show notification
                  if (this.props.currentPlayer && this.props.players[this.props.round.playerIndex].color === this.props.currentPlayer.color) {
                    this.showStartTurnNotifiction(this.props.round.type);
                  }
                  break;
                }
                case 'countryAttacked': {
                  // DONE
                  const {
                    gameStatus,
                    winner,
                    attacker,
                    defender,
                    dices,
                    players,
                    countryConquered,
                    eventsLog,
                  } = messageData.body;
    
                  // A player was killed and attacker won the game
                  if (winner && gameStatus === 'finished') {
                    console.log('game finished!');
                    const modals = { ...this.state.modals };
                    modals.gameFinishedVisible = true;
                    
                    this.setState({ modals, winner });
                  } else {
                    this.setMapSpinnerVisibility(true);
                    this.setState({ attacking: true, dices });
                    const countries = [ ...this.props.countries ];
                    const modals = { ...this.state.modals };
                    const attackerIndex = _.findIndex(countries, { countryKey: attacker.countryKey });
                    const defenderIndex = _.findIndex(countries, { countryKey: defender.countryKey });
    
                    countries[attackerIndex] = attacker;
                    countries[defenderIndex] = defender;
    
                    // Show notification
                    notification.info({
                      message: `${attacker.countryKey} attacked ${defender.countryKey}`,
                      description: '',
                      // description: `${dices.attacker.join(' - ')} vs ${dices.defender.join(' - ')}`,
                      placement: 'bottomLeft',
                    });
    
                    // Show modal to select troops to move after conquer
                    if (
                      countryConquered &&
                      this.props.currentPlayer && attacker.state.player.color === this.props.currentPlayer.color &&
                      attacker.state.troops > 1
                    ) {
                      // Show modal to select troops to move
                      modals.countryConqueredVisible = true;
                    }
    
                    setTimeout(() => {
                      // Country conquered, show notification
                      if (countryConquered) {
                        notification.info({
                          message: 'Country conquered!',
                          description: `${attacker.countryKey} conquered ${defender.countryKey}`,
                          placement: 'bottomLeft',
                        });
                      }
                      // Set spinner not visible
                      this.setMapSpinnerVisibility(false);
                      // this.setState({ countries, dices, modals, players, eventsLog, attacking: false });
                      this.setState({ dices, modals, eventsLog, attacking: false });
                      this.props.setPlayers({ players });
                      this.props.setCountries({ countries });
                    }, 1000);
                  }
                  break;
                }
                case 'troopsMoved': {
                  // DONE
                  // const { countries } = messageData.body;
                  // const { source, target, count, round, eventsLog } = messageData.body;
                  const { source, target, round, eventsLog } = messageData.body;
                  const countries = [ ...this.props.countries ];
    
                  const sourceIndex = _.findIndex(countries, { countryKey: source.countryKey });
                  const targetIndex = _.findIndex(countries, { countryKey: target.countryKey });
    
                  countries[sourceIndex] = source;
                  countries[targetIndex] = target;
    
                  // Close modal if country was conquered
                  const modals = { ...this.state.modals };
                  modals.countryConqueredVisible = false;
    
                  // this.setState({ countries, round, eventsLog, modals });
                  this.props.setCountries({ countries });
                  this.props.setRound({ round });
    
                  // Hide spinner
                  this.setMapSpinnerVisibility(false);
                  break;
                }
                case 'roundFinished': {
                  // DONE
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
                    // const countrySelection = { source: null, target: null };
    
                    // this.setState({ round, players, countrySelection });
                    this.props.setPlayers({ players });
                    this.props.setRound({ round });
                    // Clear selection
                    this.props.setSource({ source: '' });
                    this.props.setTarget({ target: '' });
                  }
    
                  // Hide spinner
                  this.setMapSpinnerVisibility(false);
    
                  // Show notification
                  if (this.props.currentPlayer && players[round.playerIndex].color === this.props.currentPlayer.color) {
                    this.showStartTurnNotifiction(round.type);
                  }
                  break;
                }
                case 'troopsAdded': {
                  // DONE
                  const { players, countries, eventsLog } = messageData.body;
    
                  // this.setState({ players, countries, eventsLog });
                  this.setState({ eventsLog });
                  this.props.setCountries({ countries });
                  this.props.setPlayers({ players });
    
                  // Hide spinner
                  this.setMapSpinnerVisibility(false);
                  break;
                }
                case 'playerDisconnected': {
                  // DONE
                  const { players, disconnectedPlayerName } = messageData.body;
    
                  // this.setState({ players });
                  this.props.setPlayers({ players });
    
                  // Notification
                  notification.info({
                    message: `Player disconnected`,
                    description: `Player ${disconnectedPlayerName} got disconnected`,
                    placement: 'bottomLeft',
                  });
                  break;
                }
                case 'guestDisconnected': {
                  // DONE
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
                  break;
                }
                case 'sync': {
                  // DONE
                  const { players, countries, round, currentPlayerId, eventsLog } = messageData.body;
                  const modals = { ...this.state.modals };
                  modals.chooseColorVisible = false;
    
                  const currentPlayer = _.find(
                    players,
                    (obj) => obj.id === currentPlayerId,
                  );
    
                  this.setState({
                    // players,
                    // countries,
                    // round,
                    // currentPlayerId,
                    modals,
                    // currentPlayer,
                    eventsLog,
                  });
    
                  this.props.setPlayers({ players });
                  this.props.setCountries({ countries });
                  this.props.setRound({ round });
                  this.props.setCurrentPlayer({ currentPlayer });
                  this.props.setCurrentPlayerId({ currentPlayerId });
                  break;
                }
                case 'reJoinGame': {
                  // DONE
                  const { reConnectedPlayerName, players } = messageData.body;
    
                  // Notification
                  notification.info({
                    message: `Player connected`,
                    description: `Player ${reConnectedPlayerName} back online`,
                    placement: 'bottomLeft',
                  });
    
                  // this.setState({ players });
                  this.props.setPlayers({ players });
                  break;
                }
                case 'cardReceived': {
                  // DONE
                  const { players, playerName, round } = messageData.body;
    
                  if (players) {
                    // Message to the player that got the card
                    this.props.setPlayers({ players });
                    // this.setState({ players });
                    // Get player index
                  } else if (playerName) {
                    // Message to everyone else
                    notification.info({
                      message: `Country card`,
                      description: `Player ${playerName} got a card`,
                      placement: 'bottomLeft',
                    });
                  }
    
                  if (round) {
                    // this.setState({ round });
                    this.props.setRound({ round });
                  }
                  break;
                }
                case 'cardExchanged': {
                  // DONE
                  const { players, countries } = messageData.body;
    
                  // Message to everyone
                  notification.info({
                    message: `Country card`,
                    description: `Card exchanged`,
                    placement: 'bottomLeft',
                  });
    
                  // this.setState({ countries, players });
                  this.props.setPlayers({ players });
                  this.props.setCountries({ countries });
                  break;
                }
                case 'cardsExchanged': {
                  const { players } = messageData.body;
    
                  // Message to everyone
                  notification.info({
                    message: `Country card`,
                    description: `Cards exchanged`,
                    placement: 'bottomLeft',
                  });
    
                  // this.setState({ players });
                  this.props.setPlayers({ players });
                  break;
                }
                case 'playersInfo': {
                  // DONE
                  const { players, currentPlayer, gameStatus } = messageData.body;
                  const spinners = { ...this.state.spinners };
                  spinners.selectPlayerColorVisible = false;
    
                  // this.setState({ players, currentPlayer, gameStatus, spinners });
                  this.props.setPlayers({ players });
                  this.props.setCurrentPlayer({ currentPlayer });
                  this.props.setGameStatus({ gameStatus });
                  break;
                }
                case 'messageReceived': {
                  // DONE
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
                  break;
                }
                case 'error': {
                  // DONE
                  const { errorMsg } = messageData.body;
                
                  // Error message
                  notification.error({
                    message: 'Error',
                    description: errorMsg,
                    placement: 'bottomLeft',
                  });
    
                  // Hide spinner
                  this.setMapSpinnerVisibility(false);
                  break;
                }
                default:
                  break;
              }
            }
          }
        };
        */
    }


    // Send websocket message
    sendMessage = (data: {}, action: string) => {
        client && client.send(
            JSON.stringify({
                data,
                action,
            }),
        );
    };

    // Show popup with player's mission
    showPlayerMission = (players: Player[]) => {
        let missionText;
        players.forEach((player) => {
            if (player.mission) {
                missionText = player.mission.text;
            }
        })

        Modal.info({
            title: 'Mission',
            content: (
                <Alert message={missionText} type="info" />
            ),
            onOk() { },
        });
    }

    showStartTurnNotifiction = (roundType: string) => {
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
            placement: 'bottomLeft',
        });
    }

    countryClicked = (countryKey: string) => {
        // Only current player can click a country
        if (!this.props.currentPlayer || this.props.players[this.props.round.playerIndex].color !== this.props.currentPlayer.color) {
            return null;
        }

        this.props.selectCountry({
            countryKey,
            // playerColor: this.props.currentPlayer.color,
            // round: this.props.round.type,
        });


        /*
        const player = this.props.currentPlayer;
        const countrySelection = { ...this.state.countrySelection };
        const country = _.find(this.props.countries, { countryKey: countryKey });
    
        if ([RoundType.ATTACK, RoundType.MOVE_TROOPS].includes(this.props.round.type)) {
          if (!this.state.countrySelection.source) {
            // Check country belongs to player
            if (player && country.state.player.color === player.color) {
              // Select source
              countrySelection.source = countryKey;
            }
          } else if (!this.state.countrySelection.target) {
            if (!CountryService.areNeighbours(this.state.countrySelection.source, countryKey)) {
              // If they are not neighbours, reset source selection
              // Check country belongs to player
              if (player && country.state.player.color === player.color) {
                countrySelection.source = countryKey;
              }
            }
            else if (this.state.countrySelection.source !== this.state.countrySelection.target) {
              // Select destiny
              countrySelection.target = countryKey;
            }
          } else {
            // Check country belongs to player
            if (player && country.state.player.color === player.color) {
              // Select source and clear destiny
              countrySelection.source = countryKey;
              countrySelection.target = '';
            }
          }
        } else if ([RoundType.ADD_TROOPS, RoundType.FIRST_ADD_TROOPS, RoundType.SECOND_ADD_TROOPS].includes(this.props.round.type)) {
          // Check country belongs to player
          if (player && country.state.player.color === player.color) {
            // Select source and clear destiny
            countrySelection.source = countryKey;
            countrySelection.target = '';
          }
        }
    
        this.setState({ countrySelection });
        */
    };

    // Done
    finishRound = () => {
        // Set spinner visible
        this.setMapSpinnerVisibility(true);

        console.log('Finish turn MSG');
        const player = _.find(this.props.players, (obj) => obj.id === this.props.currentPlayerId);

        if (player) {
            this.sendMessage({
                gameId,
                playerId: this.props.currentPlayerId,
                playerColor: player.color,
            },
                'finishRound',
            );
        }
    };

    // Done
    /** Send message to add troops */
    addTroops = (countryName: string) => {
        // Set spinner visible
        this.setMapSpinnerVisibility(true);

        console.log('Add troops MSG');
        const player = _.find(this.props.players, (obj) => obj.id === this.props.currentPlayerId);

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

    // Same as REQUEST_ADD_TROOPS
    removeTroops = (countryName: string) => {
        console.log('Remove troops MSG');

        // Set spinner visible
        this.setMapSpinnerVisibility(true);

        const player = _.find(this.props.players, (obj) => obj.id === this.props.currentPlayerId);

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

    selectSourceHandler = (countryName: string) => {
        console.log('Source' + countryName);
        this.countryClicked(countryName);
    };

    selectTargetHandler = (countryName: string) => {
        console.log('Target' + countryName);
        this.countryClicked(countryName);
    };

    canAttack = (source: { state: CountryState }, target: { state: CountryState }) => {
        return CountryService.canAttack(source, target);
    };

    canMove = (source: { state: CountryState }, target: { state: CountryState }) => {
        if (source.state.player.color !== target.state.player.color) {
            return false;
        }

        if (source.state.troops === 1) {
            return false;
        }

        // Can move
        return true;
    };

    // Done
    attack = () => {
        // Set spinner visible
        this.setMapSpinnerVisibility(true);
        // Set attacking flag and some dices just to show animation
        // this.setState({ attacking: true, dices: { attacker: [1, 1, 1], defender: [1, 1, 1] } });

        console.log(
            `${this.props.countrySelection.source} attacks ${this.props.countrySelection.target}`,
        );
        console.log('Attack!');

        const player = _.find(this.props.players, (obj) => obj.id === this.props.currentPlayerId);

        if (player) {
            this.sendMessage(
                {
                    gameId,
                    playerColor: player.color,
                    attacker: this.props.countrySelection.source,
                    defender: this.props.countrySelection.target,
                },
                'attack',
            );
        } else {
            // TODO. Handle error
        }
    };

    setMapSpinnerVisibility = (mapVisible: boolean) => {
        const spinners = { ...this.state.spinners };

        spinners.mapVisible = mapVisible;

        this.setState({ spinners });
    }

    // Done
    moveTroops = (troopsToMove: number) => {
        // Spinner
        this.setMapSpinnerVisibility(true);
        console.log(
            `Moving from ${this.props.countrySelection.source} to ${this.props.countrySelection.target}`,
        );

        const player = _.find(this.props.players, (obj) => obj.id === this.props.currentPlayerId);

        if (player) {
            this.sendMessage(
                {
                    gameId,
                    playerColor: player.color,
                    source: this.props.countrySelection.source,
                    target: this.props.countrySelection.target,
                    count: troopsToMove,
                },
                'moveTroops',
            );
        } else {
            // TODO. Handle error
        }
    };

    // Done
    getCountryCard = () => {
        console.log('Get card');

        const player = _.find(this.props.players, (obj) => obj.id === this.props.currentPlayerId);

        if (player) {
            this.sendMessage({ gameId, playerColor: player.color, }, 'getCard');
        } else {
            // TODO. Handle error
        }
    };

    playerCanExchangeCards = (player: Player) => {
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

    // Done
    exchangeCards = (cards: string[]) => {
        console.log(`Exchange cards`, cards);
        const player = _.find(this.props.players, (obj) => obj.id === this.props.currentPlayerId);

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

    // Done
    exchangeCard = (card: {}) => {
        console.log(`Exchange card ${card}`);
        const player = _.find(this.props.players, (obj) => obj.id === this.props.currentPlayerId);

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
    };

    // TODO. Rename this
    moveTroopsAfterConquest = (troopsToMove: number) => {
        // this.setMapSpinnerVisibility(true);

        console.log(`move ${troopsToMove} troops`);

        const player = _.find(this.props.players, (obj) => obj.id === this.props.currentPlayerId);

        if (player) {
            this.sendMessage(
                {
                    gameId,
                    playerColor: player.color,
                    source: this.props.countrySelection.source,
                    target: this.props.countrySelection.target,
                    count: troopsToMove,
                    conquest: true,
                },
                'moveTroops',
            );
        } else {
            // TODO. Handle error
        }

        /*
        // Close modal
        const modals = { ...this.state.modals };
        modals.countryConqueredVisible = false;
    
        this.setState({ modals });
        */
    };

    openNotification = (placement: NotificationPlacement) => {
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

    // Done
    joinGameHandler = (username: string, color: string) => {
        // Send message
        this.sendMessage(
            { gameId, username, color: PlayerColors[color] },
            'joinGame',
        );
        console.log('username', username);
        console.log('color', color);
    };

    // DONE
    reConnect = (color: string) => {
        // Send message
        this.sendMessage({ gameId, color: PlayerColors[color] }, 'reConnect');
    };

    // Done
    /** Send message to start a game */
    startGame = () => {
        // Send message
        console.log('START GAME MSG');
        this.sendMessage({ gameId }, 'startGame');
    };

    // Done
    sendChatMessage = (message: string) => {
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

    /*
    toggleCountryCardsModalVisibility = () => {
        const modals = { ...this.state.modals };
        modals.countryCardsVisible = !modals.countryCardsVisible;

        this.setState({ modals });
    }
    */

    render() {
        /*
        let currentPlayer: Player | undefined;

        if (this.props.countries) {
            currentPlayer = _.find(
                this.props.players,
                (obj) => obj.id === this.props.currentPlayerId,
            );
        }
        */

        /*
        const source = _.find(this.props.countries, (obj) => obj.countryKey === this.props.countrySelection.source);

        const troops = this.props.countries && source ? source.state.troops : 0;
        const title = `${this.props.countrySelection.source} conquered ${this.props.countrySelection.target}!`;

        const modals = (
            <div>
                <SelectPlayerColorModal />
                <CountryConqueredModal
                    troops={troops}
                    title={title}
                />
                <GameFinishedModal
                    // visible={this.state.modals.gameFinishedVisible}
                    // winner={this.state.winner}
                    okHandler={this.reConnect}
                />
                <CountryCardsModal />
            </div>
        );
        */

        /*
        // Count player countries
        let playerCountries = 0;

        if (this.props.countries && currentPlayer) {
            _.forIn(this.props.countries, (value) => {
                if (value?.state?.player?.color === currentPlayer?.color) {
                    playerCountries += 1;
                }
            });
        }
        */

        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <GameHeader />
                </Header>
                <Layout>
                    <Content className="site-layout" style={{ marginTop: 64 }}>
                        <Modals />
                        <div>
                            <ButtonsRow
                                spinnerVisible={this.state.spinners.mapVisible}
                            />
                            <div style={{ padding: '40px 0' }}>
                                <Spin spinning={this.state.spinners.mapVisible}>
                                    <Map />
                                </Spin>
                            </div>
                            <hr />
                            <BottomTabs />
                        </div>
                    </Content>
                    <GameSider spinnerVisible={this.state.spinners.mapVisible} />
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default LayoutWrapper;
