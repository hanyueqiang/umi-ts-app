/**
 * 父组件更新，子组件不更新，使用useMemo useCallback优化
 */
import React, {
  FC,
  useState,
  memo,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { Button } from 'antd';

interface RerenderProps {
  data: number;
  callback: () => void;
}

let Rerender: FC<RerenderProps> = ({ data, callback }) => {
  console.log('Rerender 跟新了');
  return (
    <div>
      <Button onClick={callback}>{data}</Button>
    </div>
  );
};

Rerender = memo(Rerender);
const Settings = () => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState(1);

  useEffect(() => {
    console.log('number', number);
    setTimeout(() => {
      console.log('number timeout1', number);
    }, 5000);
  }, []);

  const data1 = useMemo(() => data, [data]);
  return (
    <>
      <span>{number}</span>
      <Button onClick={() => setNumber(number + 1)}>点击number</Button>
      <Rerender
        data={data1}
        callback={useCallback(() => setData(data + 2), [data])}
      />
    </>
  );
};

export default Settings;
