import React, { FC, useEffect } from 'react';
import { connect } from 'umi';
import { Divider, Badge } from 'antd';
import TableComponent from '@/components/tableComponent';
import { ColumnsType } from 'antd/es/table';
import { QueryTableState, Loading } from '@/models/connect';
import FilterRegion from './components/filterRegion';
import { QueryTableProps } from './queryTable';

type RecordType = {};
// const columns: ColumnsType<RecordType> = [
//   {
//     key: 'name',
//     title: 'Name',
//     dataIndex: 'name',
//   },
// ];

const QueryTable: FC<QueryTableProps> = ({ dispatch, queryTable, loading }) => {
  const { queryTableSource } = queryTable;
  function setStepFormValues(record: any) {
    console.log(record);
  }
  function getStatusText(status: number) {
    if (status === 1) {
      return (
        <span>
          <Badge status="processing" />
          运行中
        </span>
      );
    }
    return (
      <span>
        <Badge status="default" />
        关闭
      </span>
    );
  }

  useEffect(() => {
    dispatch({
      type: 'queryTable/queryTableList',
      payload: {},
    });
  }, []);

  const columns: ColumnsType<RecordType> = [
    {
      title: '规则名称',
      key: 'name',
      dataIndex: 'name',
      ellipsis: true,
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '服务调用次数',
      dataIndex: 'callNo',
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: text => getStatusText(text),
    },
    {
      title: '操作',
      dataIndex: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              setStepFormValues(record);
            }}
          >
            配置
          </a>
          <Divider type="vertical" />
          <a href="">订阅警报</a>
        </>
      ),
    },
  ];

  return (
    <div>
      <FilterRegion />
      <TableComponent
        columns={columns}
        dataSource={queryTableSource}
        rowKey="id"
        loading={loading}
      />
    </div>
  );
};

export default connect(
  ({
    queryTable,
    loading,
  }: {
    queryTable: QueryTableState;
    loading: Loading;
  }) => ({
    queryTable,
    loading: loading.models.queryTable,
  }),
)(QueryTable);
