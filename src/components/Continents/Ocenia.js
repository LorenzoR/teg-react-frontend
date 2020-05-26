import React from "react";
import PropTypes from "prop-types";

import Australia from "../Countries/Oceania/Australia";
import Java from "../Countries/Oceania/Java";
import Borneo from "../Countries/Oceania/Borneo";
import Sumatra from "../Countries/Oceania/Sumatra";

const ocenia = (props) => {
  return (
    <g id="oceania">
      <Australia
        countryState={props.countries.AUSTRALIA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Java
        countryState={props.countries.JAVA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Borneo
        countryState={props.countries.BORNEO.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Sumatra
        countryState={props.countries.SUMATRA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

ocenia.propTypes = {};

export default ocenia;
