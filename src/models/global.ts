import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { queryNotices } from '@/services/user';
import menusSource from '../../config/menu.config';
import { ConnectState, MenusDate } from './connect.d';

export interface GlobalModelState {
  name: string;
  menusData: MenusDate[];
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    query: Effect;
    fetchNotices: Effect;
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
  },
  effects: {
    *query({ payload }, { call, put, select }) {},
    *fetchNotices({ payload }, { call, put, select }) {
      // const { menusData } = yield select(state => state.global);
      const data = yield call(queryNotices);
      yield put({
        type: 'save',
        payload: {
          name: data.name,
        },
      });
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
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default GlobalModel;
