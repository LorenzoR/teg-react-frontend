export interface Round {
  playerIndex: number;
  playerColor: string;
  type: string;
  count: number;
}

const RoundType = {
  FIRST_ADD_TROOPS: 'firstAddTroops',
  SECOND_ADD_TROOPS: 'secondAddTroops',
  ATTACK: 'attack',
  MOVE_TROOPS: 'moveTroops',
  ADD_TROOPS: 'addTroops',
  GET_CARD: 'getCard',
};

export default RoundType;
