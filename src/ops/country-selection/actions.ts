import { ActionCreatorWithPayload } from 'src/utils/types';

const SELECT_COUNTRY: 'SELECT_COUNTRY' = 'SELECT_COUNTRY';

export interface SelectCountry {
    type: typeof SELECT_COUNTRY;
    payload: {
        countryKey: string;
        // playerColor: string;
        // round: string;
    };
}

export const selectCountry: ActionCreatorWithPayload<SelectCountry> = payload => ({
    type: SELECT_COUNTRY,
    payload,
});

export const ActionTypes = {
    SELECT_COUNTRY,
};

export type Actions =
    | SelectCountry
    ;

export default {
    selectCountry,
};