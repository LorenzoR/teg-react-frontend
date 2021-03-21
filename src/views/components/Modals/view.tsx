import React from 'react';
import _ from 'lodash';
import CountryConqueredModal from '../Modals/CountryConqueredModal';
import SelectPlayerColorModal from '../Modals/SelectPlayerColorModal';
import GameFinishedModal from '../Modals/GameFinishedModal';
import CountryCardsModal from '../Modals/CountryCardsModal';
import Country from 'src/models/Country';

export interface Props {
    countries: Country[];
    countrySelection: {
        source: string;
        target: string;
    };

    // reConnectHandler: () => void;
}

const modals = (props: Props) => {
    const source = _.find(props.countries, (obj) => obj.countryKey === props.countrySelection.source);

    const troops = props.countries && source ? source.state.troops : 0;
    const title = `${props.countrySelection.source} conquered ${props.countrySelection.target}!`;

    return (
        <div>
            <SelectPlayerColorModal />
            <CountryConqueredModal
                troops={troops}
                title={title}
            />
            <GameFinishedModal
                // visible={this.state.modals.gameFinishedVisible}
                // winner={this.state.winner}
                // okHandler={props.reConnectHandler}
            />
            <CountryCardsModal />
        </div>
    );
};

export default modals;
