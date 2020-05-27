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
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ICELAND')}
        countryClicked={props.countryClicked}
      />

      <UK
        countryState={props.countries.UK.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('UK')}
        countryClicked={props.countryClicked}
      />

      <Spain
        countryState={props.countries.SPAIN.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('SPAIN')}
        countryClicked={props.countryClicked}
      />

      <France
        countryState={props.countries.FRANCE.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('FRANCE')}
        countryClicked={props.countryClicked}
      />
      <Germany
        countryState={props.countries.GERMANY.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('GERMANY')}
        countryClicked={props.countryClicked}
      />

      <Poland
        countryState={props.countries.POLAND.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('POLAND')}
        countryClicked={props.countryClicked}
      />

      <Italy
        countryState={props.countries.ITALY.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ITALY')}
        countryClicked={props.countryClicked}
      />

      <Rusia
        countryState={props.countries.RUSIA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('RUSIA')}
        countryClicked={props.countryClicked}
      />

      <Sweden
        countryState={props.countries.SWEDEN.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('SWEDEN')}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

europe.propTypes = {};

export default europe;
