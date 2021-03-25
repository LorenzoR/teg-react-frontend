
export const SET_LANGUAGE: 'SET_LANGUAGE' = 'SET_LANGUAGE';

export interface SetLanguage {
    type: typeof SET_LANGUAGE;
    payload: {
        value: boolean;
    }
};

const setLanguage = (payload: { value: boolean }) => ({
  type: SET_LANGUAGE,
  payload,
});

export type Actions =
    | SetLanguage;

export default {
  setLanguage,
};
