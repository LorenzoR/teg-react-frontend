import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'antd';

const countryConqueredModal = props => {
    return (
        <Modal
          visible={props.countryConqueredModalVisible}
          maskClosable={false}
          closable={false}
          title={props.title}
          footer={[
            <Button key="move_1" type="primary" onClick={() => props.moveTroopsHandler(0)}>
              1
            </Button>,
            <Button key="move_2" type="primary" onClick={() => props.moveTroopsHandler(1)} disabled={props.troops <= 2}>
              2
            </Button>,
            <Button key="move_3" type="primary" onClick={() => props.moveTroopsHandler(2)} disabled={props.troops <= 3}>
              3
            </Button>,
          ]}
        >
          <p>How many troops would you like to move?</p>
        </Modal>
    );
};

countryConqueredModal.propTypes = {
    
};

export default countryConqueredModal;