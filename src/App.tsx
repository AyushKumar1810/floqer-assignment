// src/App.tsx
import React from 'react';
// import './App.css';
import { Layout, Menu } from 'antd';
import MainTable from './components/MainTable';
import Analytics from './components/Analytics';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Main Table</Menu.Item>
                    <Menu.Item key="2">Analytics</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    <MainTable />
                    <Analytics />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Floqer Assignment ©2024</Footer>
        </Layout>
    );
};

export default App;
