import React from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import Canada from "../Countries/NorthAmerica/Canada";
import Yukon from "../Countries/NorthAmerica/Yukon";
import Alaska from "../Countries/NorthAmerica/Alaska";
import Oregon from "../Countries/NorthAmerica/Oregon";
import California from "../Countries/NorthAmerica/California";
import Terranova from "../Countries/NorthAmerica/Terranova";
import NewYork from "../Countries/NorthAmerica/NewYork";
import Greenland from "../Countries/NorthAmerica/Greenland";
import Mexico from "../Countries/NorthAmerica/Mexico";
import Labrador from "../Countries/NorthAmerica/Labrador";

const northAmerica = (props) => {
  const countryStates = {
    canada: _.find(props.countries, { countryKey: 'CANADA' }),
    yukon: _.find(props.countries, { countryKey: 'YUKON' }),
    alaska: _.find(props.countries, { countryKey: 'ALASKA' }),
    oregon: _.find(props.countries, { countryKey: 'OREGON' }),
    california: _.find(props.countries, { countryKey: 'CALIFORNIA' }),
    newYork: _.find(props.countries, { countryKey: 'NEW_YORK' }),
    terranova: _.find(props.countries, { countryKey: 'TERRANOVA' }),
    labrador: _.find(props.countries, { countryKey: 'LABRADOR' }),
    greenland: _.find(props.countries, { countryKey: 'GREENLAND' }),
    mexico: _.find(props.countries, { countryKey: 'MEXICO' }),
  };

  return (
    <g id="north-america">
      <Canada
        countryState={countryStates.canada.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('CANADA')}
        countryClicked={props.countryClicked}
      />

      <Yukon
        countryState={countryStates.yukon.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('YUKON')}
        countryClicked={props.countryClicked}
      />

      <Alaska
        countryState={countryStates.alaska.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ALASKA')}
        countryClicked={props.countryClicked}
      />

      <Oregon
        countryState={countryStates.oregon.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('OREGON')}
        countryClicked={props.countryClicked}
      />

      <California
        countryState={countryStates.california.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('CALIFORNIA')}
        countryClicked={props.countryClicked}
      />

      <NewYork
        countryState={countryStates.newYork.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('NEW_YORK')}
        countryClicked={props.countryClicked}
      />

      <Terranova
        countryState={countryStates.terranova.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('TERRANOVA')}
        countryClicked={props.countryClicked}
      />

      <Labrador
        countryState={countryStates.labrador.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('LABRADOR')}
        countryClicked={props.countryClicked}
      />

      <Greenland
        countryState={countryStates.greenland.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('GREENLAND')}
        countryClicked={props.countryClicked}
      />

      <Mexico
        countryState={countryStates.mexico.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('MEXICO')}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

northAmerica.propTypes = {
  countries: PropTypes.object,
  countrySelection: PropTypes.object,
  countryClicked: PropTypes.func,
};

export default northAmerica;
