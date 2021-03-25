import Player from 'src/models/Player';
import RoundType, { Round } from 'src/models/Round';
import { Actions, ActionTypes } from './actions';
import { ActionTypes as ReduxActionTypes } from 'src/ops/actions';
import { JoinedGame, PlayersInfoReceived } from 'src/ops/game/actions';
import { Dices } from 'src/models/Dices';
import Country from 'src/models/Country';
import { EventLog } from 'src/models/EventLog';


const CountriesList: {[key: string]: { name: string, countries: {[key: string]: string}}} = {
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

interface CountryState {
    player?: Player;
    troops: number;
    newTroops: number;
}

const countries: {
    countryKey: string,
    name: string,
    state: CountryState,
}[] = [];

// Set countries, players status and country cards
Object.keys(CountriesList).forEach((continentKey) => {
    Object.keys(CountriesList[continentKey].countries).forEach(
        (countryKey) => {
            countries.push({
                countryKey,
                name: CountriesList[continentKey].countries[countryKey],
                state: {
                    player: undefined,
                    troops: 0,
                    newTroops: 0,
                },
            });
        },
    );
});

export interface State {
    gameId: string;
    test: boolean;
    countries: Country[];
    players: Player[];
    round: Round;
    me?: Player;
    gameStatus: string;
    eventsLog: EventLog[];
    currentPlayerId: string;
    dices: Dices,
    winner: string;
    isAttacking: boolean;
}

const initialState: State = {
    gameId: '',
    test: true,
    countries,
    players: [],
    round: {
      playerIndex: -1,
      playerColor: '',
      count: 0,
      type: RoundType.FIRST_ADD_TROOPS,
    },
    me: undefined,
    gameStatus: '',
    eventsLog: [],
    currentPlayerId: '',    // TODO. Move this to round
    dices: {
        attacker: [],
        defender: [],
    },
    winner: '',
    isAttacking: false,
};

const reducer = (state = initialState, action: Actions | PlayersInfoReceived | JoinedGame) => {
    switch (action.type) {
        case ActionTypes.INIT_GAME:
            return {
                ...state,
                gameId: action.payload.gameId,
                countries: action.payload.countries,
                players: action.payload.players,
                gameStatus: action.payload.gameStatus,
                round: action.payload.round,
            };
        case ReduxActionTypes.GameActionTypes.PLAYERS_INFO_RECEIVED:
            return {
                ...state,
                gameStatus: action.payload.gameStatus,
                currentPlayer: action.payload.currentPlayer,
                players: action.payload.players,
            };
        case ReduxActionTypes.GameActionTypes.JOINED_GAME:
            return {
                ...state,
                gameStatus: action.payload.gameStatus,
                players: action.payload.players,
            };
        case ActionTypes.SET_GAME_ID:
            return { ...state, gameId: action.payload.gameId };
        case ActionTypes.SET_PLAYERS:
            return { ...state, players: action.payload.players };
        case ActionTypes.SET_COUNTRIES:
            return { ...state, countries: action.payload.countries };
        case ActionTypes.SET_ROUND:
            return { ...state, round: action.payload.round };
        case ActionTypes.SET_CURRENT_PLAYER:
            return { ...state, me: action.payload.currentPlayer };
        case ActionTypes.SET_GAME_STATUS:
            return { ...state, gameStatus: action.payload.gameStatus };
        case ActionTypes.SET_CURRENT_PLAYER_ID:
            return { ...state, currentPlayerId: action.payload.currentPlayerId };
        case ActionTypes.ADD_COUNTRY_TROOPS:
        case ActionTypes.REMOVE_COUNTRY_TROOPS: {
            const countries = [ ...state.countries ];
            const country = countries.find(o => o.countryKey === action.payload.countryKey);

            if (country) {
                if (action.type === ActionTypes.ADD_COUNTRY_TROOPS) {
                    country.state.troops += action.payload.troops;
                } else if (action.type === ActionTypes.REMOVE_COUNTRY_TROOPS) {
                    country.state.troops -= action.payload.troops;
                }
            }

            return {
                ...state,
                countries,
            };
        }
        case ActionTypes.SET_DICES:
            return { ...state, dices: action.payload.dices };
        case ActionTypes.SET_WINNER:
            return { ...state, winner: action.payload.winner };
        case ActionTypes.SET_EVENTS_LOG:
            return { ...state, eventsLog: action.payload.eventsLog };
        case ActionTypes.SET_IS_ATTACKING:
            return { ...state, isAttacking: action.payload.isAttacking };
        default:
          return state;
    }
}

export default reducer;
