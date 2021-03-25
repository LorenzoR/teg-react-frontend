import React from "react";
import _ from 'lodash';

import Iceland from "../Countries/Europe/Iceland";
import UK from "../Countries/Europe/UK";
import Spain from "../Countries/Europe/Spain";
import France from "../Countries/Europe/France";
import Germany from "../Countries/Europe/Germany";
import Poland from "../Countries/Europe/Poland";
import Italy from "../Countries/Europe/Italy";
import Rusia from "../Countries/Europe/Rusia";
import Sweden from "../Countries/Europe/Sweden";
import Country from "src/models/Country";

interface Props {
    countries: Country[];
  countrySelection: {
      source: string;
      target: string;
  };
  countryClicked: (id: string) => void;
}

const europe = (props: Props) => {
  const countryStates: {[key: string]: any } = {
    iceland: _.find(props.countries, { countryKey: 'ICELAND' }),
    uk: _.find(props.countries, { countryKey: 'UK' }),
    spain: _.find(props.countries, { countryKey: 'SPAIN' }),
    france: _.find(props.countries, { countryKey: 'FRANCE' }),
    germany: _.find(props.countries, { countryKey: 'GERMANY' }),
    poland: _.find(props.countries, { countryKey: 'POLAND' }),
    italy: _.find(props.countries, { countryKey: 'ITALY' }),
    rusia: _.find(props.countries, { countryKey: 'RUSIA' }),
    sweden: _.find(props.countries, { countryKey: 'SWEDEN' }),
  };

  return (
    <g id="europe">
      <Iceland
        countryState={countryStates.iceland.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ICELAND')}
        countryClicked={props.countryClicked}
      />

      <UK
        countryState={countryStates.uk.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('UK')}
        countryClicked={props.countryClicked}
      />

      <Spain
        countryState={countryStates.spain.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('SPAIN')}
        countryClicked={props.countryClicked}
      />

      <France
        countryState={countryStates.france.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('FRANCE')}
        countryClicked={props.countryClicked}
      />
      <Germany
        countryState={countryStates.germany.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('GERMANY')}
        countryClicked={props.countryClicked}
      />

      <Poland
        countryState={countryStates.poland.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('POLAND')}
        countryClicked={props.countryClicked}
      />

      <Italy
        countryState={countryStates.italy.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ITALY')}
        countryClicked={props.countryClicked}
      />

      <Rusia
        countryState={countryStates.rusia.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('RUSIA')}
        countryClicked={props.countryClicked}
      />

      <Sweden
        countryState={countryStates.sweden.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('SWEDEN')}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

export default europe;
