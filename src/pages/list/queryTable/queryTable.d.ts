import { Dispatch } from 'umi';
import { QueryTableState } from '@/models/connect';

export interface QueryTableProps {
  dispatch: Dispatch;
  queryTable: QueryTableState;
  loading?: boolean;
}
