import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
}
export interface UserInfoParamsType {
  userid: string;
}

export async function queryLogin(params: LoginParamsType) {
  return request('/api/login', {
    method: 'POST',
    data: params,
  });
}

export async function queryUserInfo(params: UserInfoParamsType) {
  return request('/api/userInfo', {
    method: 'POST',
    data: params,
  });
}

export async function logout(): Promise<any> {
  return request('/api/logout');
}
