import React, { Component } from 'react';

import { Layout } from 'antd';

import GameHeader from '../Header';
import { Notifications } from '../Notifications';

import { InitGame } from 'src/ops/game/actions';

import TopTabs from '../TopTabs';

const { Header, Footer } = Layout;

export interface Props {
    match: {
        params: { gameId: string };
    };

    initGame: (payload: InitGame['payload']) => void;
}

class LayoutWrapper extends Component<Props> {
    public componentDidMount() {
        const gameId = this.props.match.params.gameId;
        this.props.initGame({ gameId });
    }

    public render() {
        return (
            <Layout>
                <Header style={{ marginBottom: '10px' }}>
                    <GameHeader />
                </Header>
                <TopTabs />
                <Footer>Footer</Footer>
                <Notifications />
            </Layout>
        );
    }
}

export default LayoutWrapper;
