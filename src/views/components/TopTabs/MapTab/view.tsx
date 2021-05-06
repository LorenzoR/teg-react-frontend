import React from 'react';
import { Layout } from 'antd';
import Modals from '../../Modals';
import ButtonsRow from '../../ButtonsRow';
import Map from '../../Map';
import GameSider from '../../Sider/GameSider';

const { Content } = Layout;

const MapTab = () => {
    // style={{ padding: '40px 0' }}
    return (
        <Layout>
            <GameSider />
            <Content className="site-layout"> {/* style={{ marginTop: 64 }}>*/}
                <Modals />
                <div>
                    <ButtonsRow />
                    <div> {/* style={{ padding: '40px 0' }}*/}
                        <Map />
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default MapTab;
