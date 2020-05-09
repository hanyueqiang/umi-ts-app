import React, { FC } from 'react';
import { connect, Dispatch } from 'umi';
import { Row, Col } from 'antd';
import { ConnectState } from '@/models/connect';
import LoginForm from './components/loginForm';
import styles from './index.less';

const loginImg = require('@/assets/loginpic.png');
const logoTitle = require('@/assets/logotitle.png');

export interface LoginLayoutProps {
  dispatch: Dispatch;
  login: ConnectState;
  loading: boolean;
}

export interface SubmitValProps {
  username: string;
  password: string;
}

const Login: FC<LoginLayoutProps> = ({ dispatch }) => {
  function handleSubmit(values: SubmitValProps) {
    dispatch({
      type: 'login/login',
      payload: {
        ...values,
      },
    });
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <div>
          <img src={loginImg} alt="" height="400" width="420" />
        </div>
        <div className={styles.loginRight}>
          <div className={styles.loginContent}>
            <Row>
              <Col span={24} className={styles.logo}>
                <img alt="logo" src={logoTitle} />
              </Col>
            </Row>
            <LoginForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(({ login }: { login: ConnectState }) => ({ login }))(
  Login,
);
