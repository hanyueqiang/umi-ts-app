import { Effect, Reducer, history } from 'umi';
import { message } from 'antd';
import { queryLogin } from '@/services/login';

export interface QueryTableState {
  searchContentVal: string;
  statusVal: string;
}

export interface QueryTableType {
  namespace: 'queryTable';
  state: QueryTableState;
  effects: {
    queryTableList: Effect;
  };
  reducers: {
    save: Reducer<QueryTableState>;
    // 启用 immer 之后
    // save: ImmerReducer<QueryTableState>;
  };
}

const QueryTableModel: QueryTableType = {
  namespace: 'queryTable',
  state: {
    searchContentVal: '',
    statusVal: '',
  },
  effects: {
    *queryTableList({ payload }, { call, put }) {
      // const { name } = yield select((state: ConnectState) => state.global);
      const response = yield call(queryLogin, { ...payload });
      if (response.status === 'ok') {
        yield put({
          type: 'save',
          payload: {
            userInfo: response.currentAuthority,
          },
        });
        localStorage.setItem(
          'userid',
          JSON.stringify(response.currentAuthority.userid),
        );
        message.success('登录成功！');
        history.replace('/');
      } else {
        yield put({
          type: 'save',
          payload: {
            isError: true,
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
};

export default QueryTableModel;
