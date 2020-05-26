import React from "react";
import PropTypes from "prop-types";

import Aral from "../Countries/Asia/Aral";
import Tartaria from "../Countries/Asia/Tartaria";
import Taimir from "../Countries/Asia/Taimir";
import Kamchatka from "../Countries/Asia/Kamchatka";
import Japan from "../Countries/Asia/Japan";
import China from "../Countries/Asia/China";
import Gobi from "../Countries/Asia/Gobi";
import Mongolia from "../Countries/Asia/Mongolia";
import Iran from "../Countries/Asia/Iran";
import Turkey from "../Countries/Asia/Turkey";
import Israel from "../Countries/Asia/Israel";
import Arabia from "../Countries/Asia/Arabia";
import India from "../Countries/Asia/India";
import Malasia from "../Countries/Asia/Malasia";
import Siberia from "../Countries/Asia/Siberia";

const asia = (props) => {
  return (
    <g id="asia">
      <Aral
        countryState={props.countries.ARAL.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Tartaria
        countryState={props.countries.TARTARIA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Taimir
        countryState={props.countries.TAIMIR.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Kamchatka
        countryState={props.countries.KAMCHATKA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Japan
        countryState={props.countries.JAPAN.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <China
        countryState={props.countries.CHINA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Gobi
        countryState={props.countries.GOBI.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Mongolia
        countryState={props.countries.MONGOLIA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Iran
        countryState={props.countries.IRAN.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Turkey
        countryState={props.countries.TURKEY.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Israel
        countryState={props.countries.ISRAEL.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Arabia
        countryState={props.countries.ARABIA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <India
        countryState={props.countries.INDIA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Malasia
        countryState={props.countries.MALASIA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />

      <Siberia
        countryState={props.countries.SIBERIA.state}
        countrySelection={props.countrySelection}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

asia.propTypes = {};

export default asia;
