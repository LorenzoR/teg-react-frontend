import Player from 'src/models/Player';
import RoundType, { Round } from 'src/models/Round';
import { Actions, INIT_GAME, SET_PLAYERS, SET_COUNTRIES, SET_ROUND, SET_CURRENT_PLAYER, SET_GAME_STATUS } from './actions';


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

const countries: {
    countryKey: string,
    name: string,
    state: {},
}[] = [];

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

export interface State {
    test: boolean;
    countries: {
        countryKey: string,
        name: string,
        state: {},
    } [];
    players: Player[];
    round: Round;
    currentPlayer: Player | undefined;
    gameStatus: string;
}

const initialState: State = {
    test: true,
    countries,
    players: [],
    round: {
      playerIndex: -1,
      count: 0,
      type: RoundType.FIRST_ADD_TROOPS,
    },
    currentPlayer: undefined,
    gameStatus: '',
};

const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case INIT_GAME:
          return { ...state, countries: action.payload.countries, players: action.payload.players };
        case SET_PLAYERS:
          return { ...state, players: action.payload.players };
        case SET_COUNTRIES:
          return { ...state, countries: action.payload.countries };
        case SET_ROUND:
          return { ...state, round: action.payload.round };
        case SET_CURRENT_PLAYER:
          return { ...state, currentPlayer: action.payload.currentPlayer };
        case SET_GAME_STATUS:
          return { ...state, gameStatus: action.payload.gameStatus };
        default:
          return state;
    }
}

export default reducer;
