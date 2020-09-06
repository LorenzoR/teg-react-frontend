import React from "react";
import _ from 'lodash';

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

interface Props {
  countries: [];
  countrySelection: {
      source: any;
      target: any;
  };
  countryClicked: () => void;
}

const asia = (props: Props) => {
  const countryStates: {[key: string]: any } = {
    tartaria: _.find(props.countries, { countryKey: 'TARTARIA' }),
    taimir: _.find(props.countries, { countryKey: 'TAIMIR' }),
    aral: _.find(props.countries, { countryKey: 'ARAL' }),
    kamchatka: _.find(props.countries, { countryKey: 'KAMCHATKA' }),
    japan: _.find(props.countries, { countryKey: 'JAPAN' }),
    china: _.find(props.countries, { countryKey: 'CHINA' }),
    gobi: _.find(props.countries, { countryKey: 'GOBI' }),
    mongolia: _.find(props.countries, { countryKey: 'MONGOLIA' }),
    iran: _.find(props.countries, { countryKey: 'IRAN' }),
    turkey: _.find(props.countries, { countryKey: 'TURKEY' }),
    israel: _.find(props.countries, { countryKey: 'ISRAEL' }),
    arabia: _.find(props.countries, { countryKey: 'ARABIA' }),
    india: _.find(props.countries, { countryKey: 'INDIA' }),
    malasia: _.find(props.countries, { countryKey: 'MALASIA' }),
    siberia: _.find(props.countries, { countryKey: 'SIBERIA' }),
  };

  return (
    <g id="asia">
      <Aral
        countryState={countryStates.aral.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ARAL')}
        countryClicked={props.countryClicked}
      />

      <Tartaria
        countryState={countryStates.tartaria.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('TARTARIA')}
        countryClicked={props.countryClicked}
      />

      <Taimir
        countryState={countryStates.taimir.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('TAIMIR')}
        countryClicked={props.countryClicked}
      />

      <Kamchatka
        countryState={countryStates.kamchatka.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('KAMCHATKA')}
        countryClicked={props.countryClicked}
      />

      <Japan
        countryState={countryStates.japan.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('JAPAN')}
        countryClicked={props.countryClicked}
      />

      <China
        countryState={countryStates.china.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('CHINA')}
        countryClicked={props.countryClicked}
      />

      <Gobi
        countryState={countryStates.gobi.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('GOBI')}
        countryClicked={props.countryClicked}
      />

      <Mongolia
        countryState={countryStates.mongolia.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('MONGOLIA')}
        countryClicked={props.countryClicked}
      />

      <Iran
        countryState={countryStates.iran.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('IRAN')}
        countryClicked={props.countryClicked}
      />

      <Turkey
        countryState={countryStates.turkey.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('TURKEY')}
        countryClicked={props.countryClicked}
      />

      <Israel
        countryState={countryStates.israel.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ISRAEL')}
        countryClicked={props.countryClicked}
      />

      <Arabia
        countryState={countryStates.arabia.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ARABIA')}
        countryClicked={props.countryClicked}
      />

      <India
        countryState={countryStates.india.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('INDIA')}
        countryClicked={props.countryClicked}
      />

      <Malasia
        countryState={countryStates.malasia.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('MALASIA')}
        countryClicked={props.countryClicked}
      />

      <Siberia
        countryState={countryStates.siberia.state}
        isSelected={[props.countrySelection.source, props.countrySelection.target].includes('SIBERIA')}
        countryClicked={props.countryClicked}
      />
    </g>
  );
};

export default asia;
