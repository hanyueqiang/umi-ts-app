import React, { FC } from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table/Table';

type RType = {};

const TableComponent: FC<TableProps<RType>> = props => {
  const {
    style = {},
    loading = false,
    dataSource = [],
    columns,
    pagination = false,
    scroll = undefined,
    bordered = false,
    onChange = undefined,
    rowKey = '',
    rowSelection = undefined,
    size = 'middle',
    className = '',
  } = props;

  let pageConfigs: any = false;

  if (!pagination || pagination !== 'undefined') {
    pageConfigs = {
      showTotal: (total: string | number) => {
        // const pSize = Math.ceil(total / pagination.pageSize - 0);
        return `共${total}条数据`;
      },
      showQuickJumper: true,
      // pageSizeOptions: ['10', '20', '50', '100'],
      size: 'middle',
      ...pagination,
    };
  }

  return (
    <Table
      className={className}
      style={{ ...style }}
      loading={loading}
      dataSource={dataSource}
      columns={columns}
      rowKey={rowKey}
      pagination={pageConfigs}
      onChange={onChange}
      bordered={bordered}
      scroll={scroll}
      rowSelection={rowSelection}
      size={size}
    />
  );
};
export default TableComponent;
