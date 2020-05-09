import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { connect, Dispatch } from 'umi';
import { LoginModelState, Loading } from '@/models/connect';

import { SubmitValProps } from '../../index';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

interface LoginFormProps {
  dispatch: Dispatch;
  login: LoginModelState;
  loading: boolean;
}

interface ParentProps {
  onSubmit: (key: SubmitValProps) => void;
}

const LoginForm: FC<LoginFormProps & ParentProps> = ({
  login,
  dispatch,
  onSubmit,
  loading,
}) => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    onSubmit(values);
  };

  const handleChange = () => {
    const { isError } = login;
    if (isError) {
      dispatch({
        type: 'login/save',
        payload: {
          isError: false,
        },
      });
    }
  };

  return (
    <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          onChange={handleChange}
          placeholder="请输入用户名"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: '请输入密码!' },
          { min: 6, message: '密码最少6位数' },
          { max: 18, message: '密码最多18位数' },
          {
            pattern: new RegExp('^\\w+$', 'g'),
            message: '账号必须字母或数字',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          autoComplete="off"
          onChange={handleChange}
          placeholder="请输入密码"
        />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          {loading ? '登录中' : '登录'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(
  ({ login, loading }: { login: LoginModelState; loading: Loading }) => ({
    login,
    loading: loading.models.login,
  }),
)(LoginForm);
