import React from 'react';
import PropTypes from 'prop-types';

import Colombia from '../Countries/SouthAmerica/Colombia';
import Brasil from '../Countries/SouthAmerica/Brasil';
import Peru from '../Countries/SouthAmerica/Peru';
import Chile from '../Countries/SouthAmerica/Chile';
import Argentina from '../Countries/SouthAmerica/Argentina';
import Uruguay from '../Countries/SouthAmerica/Uruguay';

const southAmerica = props => {
    return (
        <g id="south-america">
          <Colombia countryState={props.countries.COLOMBIA.state}
              isSelected={[props.countrySelection.source, props.countrySelection.target].includes('COLOMBIA')}
              countryClicked={props.countryClicked} />

          <Brasil countryState={props.countries.BRASIL.state}
              isSelected={[props.countrySelection.source, props.countrySelection.target].includes('BRASIL')}
              countryClicked={() => props.countryClicked('BRASIL')} />

          <Peru countryState={props.countries.PERU.state}
              isSelected={[props.countrySelection.source, props.countrySelection.target].includes('PERU')}
              countryClicked={() => props.countryClicked('PERU')} />

          <Chile countryState={props.countries.CHILE.state}
              isSelected={[props.countrySelection.source, props.countrySelection.target].includes('CHILE')}
              countryClicked={() => props.countryClicked('CHILE')} />

          <Argentina countryState={props.countries.ARGENTINA.state}
              isSelected={[props.countrySelection.source, props.countrySelection.target].includes('ARGENTINA')}
              countryClicked={() => props.countryClicked('ARGENTINA')} />

          <Uruguay countryState={props.countries.URUGUAY.state}
              isSelected={[props.countrySelection.source, props.countrySelection.target].includes('URUGUAY')}
              countryClicked={() => props.countryClicked('URUGUAY')} />
        </g>
    );
};

southAmerica.propTypes = {
    
};

export default southAmerica;