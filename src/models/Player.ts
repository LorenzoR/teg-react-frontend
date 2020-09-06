const PlayerTypes = {
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

    static getPlayerTypes() {
        return PlayerTypes;
    }
}

export default Player;