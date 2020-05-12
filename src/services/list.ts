import request from '@/utils/request';

export interface tableParamsType {
  searchContentVal: string;
  statusVal: string;
}

export async function queryTableList(params: tableParamsType) {
  return request('/api/queryTableList', {
    method: 'POST',
    data: params,
  });
}
