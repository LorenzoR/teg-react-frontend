export enum WebsocketSendMessagesTypes {
    AddTroops = 'addTroops',
    JoinGame = 'joinGame',
    StartGame = 'startGame',
    FinishRound = 'finishRound',
    Attack = 'attack',
    ReConnect = 'reConnect',
    ChatMessage = 'chatMessage',
    ExchangeCard = 'exchangeCard',
    ExchangeCards = 'exchangeCards',
    MoveTroops = 'moveTroops',
    GetCard = 'getCard',
};

export enum WebsocketReceivedMessagesTypes {
    JoinedGame = 'joinGame',
    GameStarted = 'gameStarted',
    ConnectionId = 'connectionId',
    CountryAttacked = 'countryAttacked',
    TroopsMoved = 'troopsMoved',
    RoundFinished = 'roundFinished',
    TroopsAdded = 'troopsAdded',
    PlayerDisconnected = 'playerDisconnected',
    GuestDisconnected = 'guestDisconnected',
    Sync = 'sync',
    ReJoinedGame = 'reJoinGame',
    CardReceived = 'cardReceived',
    CardExchanged = 'cardExchanged',
    CardsExchanged = 'cardsExchanged',
    PlayersInfo = 'playersInfo',
    MessageReceived = 'messageReceived',
    Error = 'error',
};

export enum ModalType {
    CardsModal = 'CardsModal',
    ChooseColor = 'ChooseColor',
    CountryConquered = 'CountryConquered',
    GameFinished = 'GameFinished',
    CountryCards = 'CountryCards',
};
