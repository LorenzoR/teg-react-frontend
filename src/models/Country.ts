import Player from "./Player";

interface CountryState {
    player?: Player;
    troops: number;
    newTroops: number;
}

export default interface Country {
    countryKey: string;
    name: string;
    state: CountryState;
};
