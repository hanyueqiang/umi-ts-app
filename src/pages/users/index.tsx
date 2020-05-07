import React from 'react';
import { Button, DatePicker } from 'antd';

export default () => {
  function onChange(date: any, dateString: string) {
    console.log(date, dateString);
  }
  return (
    <div>
      <h1>users</h1>
      <Button type="primary">你好</Button>
      <DatePicker onChange={onChange} />
    </div>
  );
};
