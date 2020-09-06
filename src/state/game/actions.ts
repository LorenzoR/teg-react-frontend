
export const SOME_ACTION: 'SOME_ACTION' = 'SOME_ACTION';

export interface SomeAction {
    type: typeof SOME_ACTION;
    payload: {
        value: boolean;
    }
};

const someAction = (payload: { value: boolean }) => ({
  type: SOME_ACTION,
  payload,
});

export type Actions =
    | SomeAction;

export default {
  someAction,
};
