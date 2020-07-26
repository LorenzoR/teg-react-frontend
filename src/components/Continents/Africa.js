import React from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import Egypt from "../Countries/Africa/Egipt";
import Madagascar from "../Countries/Africa/Madagascar";
import Zaire from "../Countries/Africa/Zaire";
import Sahara from "../Countries/Africa/Sahara";
import SouthAfrica from "../Countries/Africa/SouthAfrica";
import Etiopia from "../Countries/Africa/Etiopia";

const africa = (props) => {
  const countryStates = {
    egypt: _.find(props.countries, { countryKey: 'EGYPT' }),
    sahara: _.find(props.countries, { countryKey: 'SAHARA' }),
    ethiopia: _.find(props.countries, { countryKey: 'ETHIOPIA' }),
    zaire: _.find(props.countries, { countryKey: 'ZAIRE' }),
    southAfrica: _.find(props.countries, { countryKey: 'SOUTH_AFRICA' }),
    madagascar: _.find(props.countries, { countryKey: 'MADAGASCAR' }),
  };

  return (
    <g id="africa">
      <Egypt
        countryState={countryStates.egypt.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('EGYPT')}
        countryClicked={props.countryClicked}
      />

      <Sahara
        countryState={countryStates.sahara.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('SAHARA')}
        countryClicked={props.countryClicked}
      />

      <Etiopia
        countryState={countryStates.ethiopia.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ETHIOPIA')}
        countryClicked={props.countryClicked}
      />

      <Zaire
        countryState={countryStates.zaire.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ZAIRE')}
        countryClicked={props.countryClicked}
      />

      <SouthAfrica
        countryState={countryStates.southAfrica.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('SOUTH_AFRICA')}
        countryClicked={props.countryClicked}
      />

      <Madagascar
        countryState={countryStates.madagascar.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('MADAGASCAR')}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

africa.propTypes = {
  countries: PropTypes.array,
  countrySelection: PropTypes.object,
  countryClicked: PropTypes.func,
};

export default africa;
