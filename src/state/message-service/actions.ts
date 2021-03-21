import { ActionCreatorWithPayload } from 'src/utils/types';
import WebsocketService from 'src/services/websocket';

const SET_CLIENT: 'SET_CLIENT' = 'SET_CLIENT';

export interface SetClient {
    type: typeof SET_CLIENT;
    payload: {
        client: WebsocketService;
    };
}

export const setClient: ActionCreatorWithPayload<SetClient> = payload => ({
    type: SET_CLIENT,
    payload,
});

export const ActionTypes = {
    SET_CLIENT,
};

export type Actions =
    | SetClient
    ;

export default {
    setClient,
};
