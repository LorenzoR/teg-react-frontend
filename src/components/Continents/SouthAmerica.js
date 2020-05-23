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
          <Colombia countryState={props.countries ? props.countries[0].state : null}/>
          <Brasil />
          <Peru />
          <Chile />
          <Argentina />
          <Uruguay />
        </g>
    );
};

southAmerica.propTypes = {
    
};

export default southAmerica;