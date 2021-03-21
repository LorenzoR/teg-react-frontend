import React from "react";
import _ from 'lodash';

import Australia from "../Countries/Oceania/Australia";
import Java from "../Countries/Oceania/Java";
import Borneo from "../Countries/Oceania/Borneo";
import Sumatra from "../Countries/Oceania/Sumatra";
import Country from "src/models/Country";

interface Props {
    countries: Country[];
  countrySelection: {
      source: string;
      target: string;
  };
  countryClicked: (id: string) => void;
}

const oceania = (props: Props) => {
  const countryStates: {[key: string]: any } = {
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

export default oceania;
