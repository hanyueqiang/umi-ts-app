import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
}
export async function queryLogin(params: LoginParamsType) {
  return request('/api/login', {
    method: 'POST',
    data: params,
  });
}
