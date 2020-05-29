import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { Button } from 'antd';

// 注意： forwardRef必须传props
export default forwardRef((props, ref: any) => {
  const [preVal, setPreval] = useState('hello');

  // 透传给父组件的实例值
  useImperativeHandle(ref, () => ({ preVal }), [preVal]);

  return (
    <div>
      <Button onClick={() => setPreval('word')}>{preVal}</Button>
    </div>
  );
});
