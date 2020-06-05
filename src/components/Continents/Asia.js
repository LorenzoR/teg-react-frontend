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
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ARAL')}
        countryClicked={props.countryClicked}
      />

      <Tartaria
        countryState={props.countries.TARTARIA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('TARTARIA')}
        countryClicked={props.countryClicked}
      />

      <Taimir
        countryState={props.countries.TAIMIR.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('TAIMIR')}
        countryClicked={props.countryClicked}
      />

      <Kamchatka
        countryState={props.countries.KAMCHATKA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('KAMCHATKA')}
        countryClicked={props.countryClicked}
      />

      <Japan
        countryState={props.countries.JAPAN.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('JAPAN')}
        countryClicked={props.countryClicked}
      />

      <China
        countryState={props.countries.CHINA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('CHINA')}
        countryClicked={props.countryClicked}
      />

      <Gobi
        countryState={props.countries.GOBI.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('GOBI')}
        countryClicked={props.countryClicked}
      />

      <Mongolia
        countryState={props.countries.MONGOLIA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('MONGOLIA')}
        countryClicked={props.countryClicked}
      />

      <Iran
        countryState={props.countries.IRAN.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('IRAN')}
        countryClicked={props.countryClicked}
      />

      <Turkey
        countryState={props.countries.TURKEY.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('TURKEY')}
        countryClicked={props.countryClicked}
      />

      <Israel
        countryState={props.countries.ISRAEL.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ISRAEL')}
        countryClicked={props.countryClicked}
      />

      <Arabia
        countryState={props.countries.ARABIA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ARABIA')}
        countryClicked={props.countryClicked}
      />

      <India
        countryState={props.countries.INDIA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('INDIA')}
        countryClicked={props.countryClicked}
      />

      <Malasia
        countryState={props.countries.MALASIA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('MALASIA')}
        countryClicked={props.countryClicked}
      />

      <Siberia
        countryState={props.countries.SIBERIA.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('SIBERIA')}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

asia.propTypes = {
  countries: PropTypes.object,
  countrySelection: PropTypes.object,
  countryClicked: PropTypes.func,
};

export default asia;
