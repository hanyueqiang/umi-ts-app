import React, { FC } from 'react';
import { Input, Select, Button } from 'antd';
import { connect } from 'umi';
import { SearchOutlined } from '@ant-design/icons';
import { QueryTableState } from '@/models/connect';
import { QueryTableProps } from '../queryTable';

const { Option } = Select;

const ListFilterRegion: FC<QueryTableProps> = ({ dispatch, queryTable }) => {
  const { searchContentVal, statusVal } = queryTable;

  const onInputChange = (e: any) => {
    dispatch({
      type: 'queryTable/save',
      payload: {
        searchContentVal: e.target.value,
      },
    });
  };
  const onStatusChange = (val: string) => {
    dispatch({
      type: 'queryTable/save',
      payload: {
        statusVal: val,
      },
    });
  };

  const onSearchChange = () => {
    dispatch({
      type: 'queryTable/queryTableList',
      payload: {},
    });
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <Input
        placeholder="请输入搜索内容"
        value={searchContentVal}
        style={{ width: 200 }}
        suffix={<SearchOutlined />}
        onChange={onInputChange}
      />
      <span style={{ marginLeft: 20, marginRight: 10 }}>状态</span>
      <Select
        value={statusVal}
        style={{ width: 140 }}
        allowClear
        onChange={onStatusChange}
      >
        <Option value="">全部</Option>
        <Option value="1">运行</Option>
        <Option value="2">关闭</Option>
        <Option value="3">试运行</Option>
      </Select>
      <Button
        type="primary"
        style={{ marginLeft: 24 }}
        onClick={onSearchChange}
      >
        查询
      </Button>
    </div>
  );
};

export default connect(({ queryTable }: { queryTable: QueryTableState }) => ({
  queryTable,
}))(ListFilterRegion);
