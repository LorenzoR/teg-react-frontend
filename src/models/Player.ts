export const PlayerTypes = {
    BLUE: 'blue',
    RED: 'red',
    GREEN: 'green',
    YELLOW: 'yellow',
    BLACK: 'black',
    PINK: 'pink',
};

interface Mission {
    text: string;
  }

class Player {
    id: string = '';
    mission: Mission = {
        text: '',
    };
    color: string = '';
    cards: CountryCard[] = [];
    isAdmin: boolean = false;
    name: string = '';
    playerStatus: string = 'offline';
    canGetCard = false;

    static getPlayerTypes() {
        return PlayerTypes;
    }
}

export interface CountryCard {
    type: 'balloon' | 'ship' | 'cannon' | 'wildCard';
    country: string;
    exchanged: boolean;
}

export default Player;