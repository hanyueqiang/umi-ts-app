import React, { FC, Suspense, useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { Loading, DashboardState } from '@/models/connect';
import PageLoading from './components/PageLoading';

const VisitCard = React.lazy(() => import('./components/visitCard'));
interface DashboardProps {
  dispatch: Dispatch;
  dashboard: DashboardState;
  loading?: boolean;
}

const Dashboard: FC<DashboardProps> = ({ dashboard, dispatch, loading }) => {
  const { cardSource } = dashboard;

  useEffect(() => {
    dispatch({
      type: 'dashboard/queryCard',
      payload: {},
    });
  }, []);
  return (
    <div>
      <Suspense fallback={<PageLoading />}>
        <VisitCard totalData={cardSource} loading={loading} />
      </Suspense>
    </div>
  );
};

export default connect(
  ({
    dashboard,
    loading,
  }: {
    dashboard: DashboardState;
    loading: Loading;
  }) => ({
    dashboard,
    loading: loading.effects['dashboard/queryCard'],
  }),
)(Dashboard);
