import React from 'react';
import styles from './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import HeaderContent from './header';
import MenuContent from './menu';
const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

export default (props: any) => {
  console.log(props);
  return (
    <Layout className={styles.container}>
      <Header
        style={{ background: '#fff', padding: '0 16px' }}
        className={styles.contentHeader}
      >
        <HeaderContent />
      </Header>
      <Layout style={{ padding: 0 }}>
        <Sider width={200}>
          <MenuContent />
        </Sider>
        <Content
          className={styles.content}
          style={{
            margin: 16,
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
      <Footer className={styles.footerContent}>管理平台通用业务模版</Footer>
    </Layout>
  );
};
