import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';

const userInfo = props => {
    return (
        <Card size="small" title="User Info" headStyle={props.headStyle}>
            <p><strong>Countries: </strong>10</p>
            <p><strong>Troops to add: </strong>{props.troopsToAdd}</p>
        </Card>
    );
};

userInfo.propTypes = {
    
};

export default userInfo;