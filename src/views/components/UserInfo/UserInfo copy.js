import React from 'react';
import PropTypes from 'prop-types';

import { Descriptions, Badge } from 'antd';

const userInfo = props => {
    return (
        <Descriptions title="User Info" bordered>
            <Descriptions.Item label="Countries">11</Descriptions.Item>
            <Descriptions.Item label="Troops">12</Descriptions.Item>
            <Descriptions.Item label="Troops to add">3</Descriptions.Item>
            <Descriptions.Item label="Cards">4</Descriptions.Item>
            <Descriptions.Item label="Exchanges">0</Descriptions.Item>
        </Descriptions>
    );
};

userInfo.propTypes = {
    
};

export default userInfo;