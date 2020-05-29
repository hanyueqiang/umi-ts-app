import React, { useRef } from 'react';
import { Button, DatePicker } from 'antd';

import Child from './components/child';

export default () => {
  function onChange(date: any, dateString: string) {
    console.log(date, dateString);
  }
  // 获取子组件实例值
  const childRef = useRef();

  // 打印子组件实例值
  function getChildRefHandle() {
    console.log(childRef.current);
  }

  return (
    <div>
      <h1>users</h1>
      <Button type="primary">你好</Button>
      <DatePicker onChange={onChange} />
      <Child ref={childRef} />
      <Button onClick={getChildRefHandle}>获取子组件实例值</Button>
    </div>
  );
};
