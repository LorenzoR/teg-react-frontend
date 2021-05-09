import { WebsocketReceivedMessagesTypes } from 'src/consts';
import { ActionCreatorWithPayload } from 'src/utils/types';

const SET_RECEIVED_MESSAGE: 'SET_RECEIVED_MESSAGE' = 'SET_RECEIVED_MESSAGE';

export interface WSMsgReceived {
    type: typeof SET_RECEIVED_MESSAGE;
    payload: {
        message: {
            action: WebsocketReceivedMessagesTypes;
            body: any;
        };
    };
}

export const wsMsgReceived: ActionCreatorWithPayload<WSMsgReceived> = payload => ({
    type: SET_RECEIVED_MESSAGE,
    payload,
});

export const ActionTypes = {
    SET_RECEIVED_MESSAGE,
};

export type Actions =
    | WSMsgReceived
    ;

export default {
    wsMsgReceived,
};