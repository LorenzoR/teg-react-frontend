import { WebsocketReceivedMessagesTypes } from 'src/consts';
import { ConnectionIDReceived, GameStarted, GameSync, JoinedGame, PlayersInfoReceived } from 'src/ops/game/actions';
import { IMessageEvent, w3cwebsocket as W3CWebSocket } from 'websocket';

export interface OnMessageActions {
    joinGame: (body: JoinedGame['payload']) => void;
    gameStarted: (body: GameStarted['payload']) => void;
    connectionId: (body: ConnectionIDReceived['payload']) => void;
    countryAttacked: (body: any) => void;
    troopsMoved: (body: any) => void;
    roundFinished: (body: any) => void;
    troopsAdded: (body: any) => void;
    playerDisconnected: (body: any) => void;
    guestDisconnected: (body: any) => void;
    sync: (body: GameSync['payload']) => void;
    reJoinGame: (body: any) => void;
    cardReceived: (body: any) => void;
    cardExchanged: (body: any) => void;
    cardsExchanged: (body: any) => void;
    playersInfo: (body: PlayersInfoReceived['payload']) => void;
    messageReceived: (body: any) => void;
    error: (body: any) => void;
}

class WebsocketService {
    private static client: W3CWebSocket;

    constructor(endpoint: string, gameId: string, onMessageActions?: OnMessageActions) { // TODO shouldn't be optional
        WebsocketService.client = new W3CWebSocket(endpoint);

        console.log('/*/*/** CReated', WebsocketService.client);

        WebsocketService.client.onclose = (event) => {
            // alert(`Closing. ${JSON.stringify(event)}`);
        }
      
        WebsocketService.client.onerror = (error) => {
            alert(`ERROR. Could not connect to server: ${JSON.stringify(error)}`);
        }

        WebsocketService.client.onopen = () => {
            console.log('WebSocket Client Connected');
            // console.log('data', data);
            // console.log('props', this.props);
            // this.logInUser('someUsername');
      
            // Send message to get players
            if (WebsocketService.client?.readyState === WebsocketService.client.OPEN) {
                setTimeout(() => WebsocketService.sendMessage({ gameId }, 'getPlayers'), 500);
            }
        }

        WebsocketService.client.onmessage = (message: IMessageEvent) => {
            console.log('recibido');
            if (message && message.data) {
                const messageData = JSON.parse(message.data as string);
                if (messageData.body && onMessageActions) {
                    console.log('data', JSON.parse(message.data as string));
        
                    const { action, body } = messageData;
        
                    switch (action) {
                        case WebsocketReceivedMessagesTypes.JoinedGame:
                            onMessageActions.joinGame(body);
                            break;
                        case WebsocketReceivedMessagesTypes.GameStarted:
                            onMessageActions.gameStarted(body);
                            break;
                        case WebsocketReceivedMessagesTypes.ConnectionId:
                            onMessageActions.connectionId(body);
                            break;
                        case WebsocketReceivedMessagesTypes.CountryAttacked:
                            onMessageActions.countryAttacked(body);
                            break;
                        case WebsocketReceivedMessagesTypes.TroopsMoved:
                            onMessageActions.troopsMoved(body);
                            break;
                        case WebsocketReceivedMessagesTypes.RoundFinished:
                            onMessageActions.roundFinished(body);
                            break;
                        case WebsocketReceivedMessagesTypes.TroopsAdded:
                            onMessageActions.troopsAdded(body);
                            break;
                        case WebsocketReceivedMessagesTypes.PlayerDisconnected:
                            onMessageActions.playerDisconnected(body);
                            break;
                        case WebsocketReceivedMessagesTypes.GuestDisconnected:
                            onMessageActions.guestDisconnected(body);
                            break;
                        case WebsocketReceivedMessagesTypes.Sync:
                            onMessageActions.sync(body);
                            break;
                        case WebsocketReceivedMessagesTypes.ReJoinedGame:
                            onMessageActions.reJoinGame(body);
                            break;
                        case WebsocketReceivedMessagesTypes.CardReceived:
                            onMessageActions.cardReceived(body);
                            break;
                        case WebsocketReceivedMessagesTypes.CardExchanged:
                            onMessageActions.cardExchanged(body);
                            break;
                        case WebsocketReceivedMessagesTypes.CardsExchanged:
                            onMessageActions.cardsExchanged(body);
                            break;
                        case WebsocketReceivedMessagesTypes.PlayersInfo:
                            onMessageActions.playersInfo(body);
                            break;
                        case WebsocketReceivedMessagesTypes.MessageReceived:
                            onMessageActions.messageReceived(body);
                            break;
                        case WebsocketReceivedMessagesTypes.Error:
                            onMessageActions.error(body);
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }

    static getClient = () => WebsocketService.client;

    static sendMessage = (data: {}, action: string) => {
        WebsocketService.client && WebsocketService.client.send(
            JSON.stringify({
                data,
                action,
            }),
        );
    };
}

export default WebsocketService;