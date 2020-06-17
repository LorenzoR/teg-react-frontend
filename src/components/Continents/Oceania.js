import React from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import Australia from "../Countries/Oceania/Australia";
import Java from "../Countries/Oceania/Java";
import Borneo from "../Countries/Oceania/Borneo";
import Sumatra from "../Countries/Oceania/Sumatra";

const oceania = (props) => {
  const countryStates = {
    australia: _.find(props.countries, { countryKey: 'AUSTRALIA' }),
    java: _.find(props.countries, { countryKey: 'JAVA' }),
    borneo: _.find(props.countries, { countryKey: 'BORNEO' }),
    sumatra: _.find(props.countries, { countryKey: 'SUMATRA' }),
  };

  return (
    <g id="oceania">
      <Australia
        countryState={countryStates.australia.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('AUSTRALIA')}
        countryClicked={props.countryClicked}
      />

      <Java
        countryState={countryStates.java.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('JAVA')}
        countryClicked={props.countryClicked}
      />

      <Borneo
        countryState={countryStates.borneo.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('BORNEO')}
        countryClicked={props.countryClicked}
      />

      <Sumatra
        countryState={countryStates.sumatra.state}
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
