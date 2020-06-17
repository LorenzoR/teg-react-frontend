import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Colombia from '../Countries/SouthAmerica/Colombia';
import Brasil from '../Countries/SouthAmerica/Brasil';
import Peru from '../Countries/SouthAmerica/Peru';
import Chile from '../Countries/SouthAmerica/Chile';
import Argentina from '../Countries/SouthAmerica/Argentina';
import Uruguay from '../Countries/SouthAmerica/Uruguay';

const southAmerica = props => {
  const countryStates = {
    colombia: _.find(props.countries, { countryKey: 'COLOMBIA' }),
    brasil: _.find(props.countries, { countryKey: 'BRASIL' }),
    peru: _.find(props.countries, { countryKey: 'PERU' }),
    chile: _.find(props.countries, { countryKey: 'CHILE' }),
    argentina: _.find(props.countries, { countryKey: 'ARGENTINA' }),
    uruguay: _.find(props.countries, { countryKey: 'URUGUAY' }),
  };

    return (
        <g id="south-america">
          <Colombia countryState={countryStates.colombia.state}
              isSelected={[props.countrySelection.source, props.countrySelection.target].includes('COLOMBIA')}
              countryClicked={props.countryClicked} />

          <Brasil countryState={countryStates.brasil.state}
              isSelected={[props.countrySelection.source, props.countrySelection.target].includes('BRASIL')}
              countryClicked={() => props.countryClicked('BRASIL')} />

          <Peru countryState={countryStates.peru.state}
              isSelected={[props.countrySelection.source, props.countrySelection.target].includes('PERU')}
              countryClicked={() => props.countryClicked('PERU')} />

          <Chile countryState={countryStates.chile.state}
              isSelected={[props.countrySelection.source, props.countrySelection.target].includes('CHILE')}
              countryClicked={() => props.countryClicked('CHILE')} />

          <Argentina countryState={countryStates.argentina.state}
              isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ARGENTINA')}
              countryClicked={() => props.countryClicked('ARGENTINA')} />

          <Uruguay countryState={countryStates.uruguay.state}
              isSelected={[props.countrySelection.source, props.countrySelection.target].includes('URUGUAY')}
              countryClicked={() => props.countryClicked('URUGUAY')} />
        </g>
    );
};

southAmerica.propTypes = {
  countries: PropTypes.object,
  countrySelection: PropTypes.object,
  countryClicked: PropTypes.func,
};

export default southAmerica;