import React from "react";
import PropTypes from "prop-types";

import Australia from "../Countries/Oceania/Australia";
import Java from "../Countries/Oceania/Java";
import Borneo from "../Countries/Oceania/Borneo";
import Sumatra from "../Countries/Oceania/Sumatra";

const oceania = (props) => {
  return (
    <g id="oceania">
      <Australia
        countryState={props.countries.AUSTRALIA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('AUSTRALIA')}
        countryClicked={props.countryClicked}
      />

      <Java
        countryState={props.countries.JAVA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('JAVA')}
        countryClicked={props.countryClicked}
      />

      <Borneo
        countryState={props.countries.BORNEO.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('BORNEO')}
        countryClicked={props.countryClicked}
      />

      <Sumatra
        countryState={props.countries.SUMATRA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('SUMATRA')}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

oceania.propTypes = {
  countries: PropTypes.object,
  countrySelection: PropTypes.object,
  countryClicked: PropTypes.func,
};

export default oceania;
