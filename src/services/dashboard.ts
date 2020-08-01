import request from '@/utils/request';

export async function queryCard(): Promise<any> {
  return request('/api/dashboard/card');
}
