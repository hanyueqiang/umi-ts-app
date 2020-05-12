import { Effect, Reducer, Subscription } from 'umi';
import { queryUserInfo } from '@/services/login';
import menusSource from '../../config/menu.config';
import { MenusDate, LoginUserInfoState } from './connect.d';

export interface GlobalModelState {
  name: string;
  menusData: MenusDate[];
  userInfo: LoginUserInfoState;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    queryUserInfo: Effect;
  };
  reducers: {
    save: Reducer<GlobalModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<GlobalModelState>;
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    name: '',
    menusData: menusSource,
    userInfo: {
      id: '',
      name: '',
    },
  },
  effects: {
    *queryUserInfo({ payload }, { call, put }) {
      const userid = localStorage.getItem('userid');
      const response = yield call(queryUserInfo, { ...payload, userid });
      if (response.status === 'ok') {
        yield put({
          type: 'save',
          payload: {
            userInfo: response.data,
          },
        });
      }
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const reg = /^\/login/g;
        if (!reg.test(pathname)) {
          dispatch({
            type: 'queryUserInfo',
            payload: {},
          });
        }
      });
    },
  },
};

export default GlobalModel;
