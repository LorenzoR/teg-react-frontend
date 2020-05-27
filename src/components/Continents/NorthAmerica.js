import React from "react";
import PropTypes from "prop-types";

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
  return (
    <g id="north-america">
      <Canada
        countryState={props.countries.CANADA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('CANADA')}
        countryClicked={props.countryClicked}
      />

      <Yukon
        countryState={props.countries.YUKON.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('YUKON')}
        countryClicked={props.countryClicked}
      />

      <Alaska
        countryState={props.countries.ALASKA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ALASKA')}
        countryClicked={props.countryClicked}
      />

      <Oregon
        countryState={props.countries.OREGON.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('OREGON')}
        countryClicked={props.countryClicked}
      />

      <California
        countryState={props.countries.CALIFORNIA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('CALIFORNIA')}
        countryClicked={props.countryClicked}
      />

      <NewYork
        countryState={props.countries.NEW_YORK.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('NEW_YORK')}
        countryClicked={props.countryClicked}
      />

      <Terranova
        countryState={props.countries.TERRANOVA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('TERRANOVA')}
        countryClicked={props.countryClicked}
      />

      <Labrador
        countryState={props.countries.LABRADOR.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('LABRADOR')}
        countryClicked={props.countryClicked}
      />

      <Greenland
        countryState={props.countries.GREENLAND.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('GREENLAND')}
        countryClicked={props.countryClicked}
      />

      <Mexico
        countryState={props.countries.MEXICO.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('MEXICO')}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

northAmerica.propTypes = {};

export default northAmerica;
