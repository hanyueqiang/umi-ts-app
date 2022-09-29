import { Effect, Reducer, history } from 'umi';
import { queryCard } from '@/services/dashboard';

export interface DashboardState {
  data: DataProps[];
  cardSource: totalDataType;
}

interface DataProps {
  id: string;
  name: string;
}

export type totalDataType = {
  headCount?: number;
  surveyCount?: number;
  totalCount?: number;
  deadLine?: string;
  rate?: string;
  lossRate?: string;
};

export interface DashboardType {
  namespace: 'dashboard';
  state: DashboardState;
  effects: {
    queryCard: Effect;
  };
  reducers: {
    save: Reducer<DashboardState>;
  };
}

const DashboardModel: DashboardType = {
  namespace: 'dashboard',
  state: {
    data: [],
    cardSource: {},
  },
  effects: {
    *queryCard(_, { call, put }) {
      const response = yield call(queryCard);
      yield put({
        type: 'save',
        payload: {
          cardSource: response.data,
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
};

export default DashboardModel;
