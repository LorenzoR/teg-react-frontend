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
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Sahara
        countryState={props.countries.SAHARA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Etiopia
        countryState={props.countries.ETHIOPIA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Zaire
        countryState={props.countries.ZAIRE.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <SouthAfrica
        countryState={props.countries.SOUTH_AFRICA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Madagascar
        countryState={props.countries.MADAGASCAR.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

africa.propTypes = {};

export default africa;
