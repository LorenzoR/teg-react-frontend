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
              countrySelection={props.countrySelection}
              countryClicked={props.countryClicked} />

          <Brasil countryState={props.countries.BRASIL.state}
              countrySelection={props.countrySelection}
              countryClicked={() => props.countryClicked('BRASIL')} />

          <Peru countryState={props.countries.PERU.state}
              countrySelection={props.countrySelection}
              countryClicked={() => props.countryClicked('PERU')} />

          <Chile countryState={props.countries.CHILE.state}
              countrySelection={props.countrySelection}
              countryClicked={() => props.countryClicked('CHILE')} />

          <Argentina countryState={props.countries.ARGENTINA.state}
              countrySelection={props.countrySelection}
              countryClicked={() => props.countryClicked('ARGENTINA')} />

          <Uruguay countryState={props.countries.URUGUAY.state}
              countrySelection={props.countrySelection}
              countryClicked={() => props.countryClicked('URUGUAY')} />
        </g>
    );
};

southAmerica.propTypes = {
    
};

export default southAmerica;