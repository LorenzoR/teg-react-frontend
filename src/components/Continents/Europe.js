import React from "react";
import PropTypes from "prop-types";

import Iceland from "../Countries/Europe/Iceland";
import UK from "../Countries/Europe/UK";
import Spain from "../Countries/Europe/Spain";
import France from "../Countries/Europe/France";
import Germany from "../Countries/Europe/Germany";
import Poland from "../Countries/Europe/Poland";
import Italy from "../Countries/Europe/Italy";
import Rusia from "../Countries/Europe/Rusia";
import Sweden from "../Countries/Europe/Sweden";

const europe = (props) => {
  return (
    <g id="europe">
      <Iceland
        countryState={props.countries.ICELAND.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <UK
        countryState={props.countries.UK.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Spain
        countryState={props.countries.SPAIN.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <France
        countryState={props.countries.FRANCE.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />
      <Germany
        countryState={props.countries.GERMANY.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Poland
        countryState={props.countries.POLAND.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Italy
        countryState={props.countries.ITALY.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Rusia
        countryState={props.countries.RUSIA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Sweden
        countryState={props.countries.SWEDEN.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

europe.propTypes = {};

export default europe;
