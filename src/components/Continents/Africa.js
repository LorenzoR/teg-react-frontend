import React from "react";
import PropTypes from "prop-types";

import Egypt from "../Countries/Africa/Egipt";
import Madagascar from "../Countries/Africa/Madagascar";
import Zaire from "../Countries/Africa/Zaire";
import Sahara from "../Countries/Africa/Sahara";
import SouthAfrica from "../Countries/Africa/SouthAfrica";
import Etiopia from "../Countries/Africa/Etiopia";

const africa = (props) => {
  return (
    <g id="africa">
      <Egypt
        countryState={props.countries.EGYPT.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('EGYPT')}
        countryClicked={props.countryClicked}
      />

      <Sahara
        countryState={props.countries.SAHARA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('SAHARA')}
        countryClicked={props.countryClicked}
      />

      <Etiopia
        countryState={props.countries.ETHIOPIA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ETHIOPIA')}
        countryClicked={props.countryClicked}
      />

      <Zaire
        countryState={props.countries.ZAIRE.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ZAIRE')}
        countryClicked={props.countryClicked}
      />

      <SouthAfrica
        countryState={props.countries.SOUTH_AFRICA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('SOUTH_AFRICA')}
        countryClicked={props.countryClicked}
      />

      <Madagascar
        countryState={props.countries.MADAGASCAR.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('MADAGASCAR')}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

africa.propTypes = {};

export default africa;
