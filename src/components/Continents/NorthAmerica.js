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
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Yukon
        countryState={props.countries.YUKON.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Alaska
        countryState={props.countries.ALASKA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Oregon
        countryState={props.countries.OREGON.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <California
        countryState={props.countries.CALIFORNIA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <NewYork
        countryState={props.countries.NEW_YORK.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Terranova
        countryState={props.countries.TERRANOVA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Labrador
        countryState={props.countries.LABRADOR.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Greenland
        countryState={props.countries.GREENLAND.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Mexico
        countryState={props.countries.MEXICO.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

northAmerica.propTypes = {};

export default northAmerica;
