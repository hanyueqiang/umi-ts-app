import { GlobalModelState } from './global';

export { GlobalModelState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
}

export interface Route {
  routes?: Route[];
}
export interface MenusDate {
  title: string;
  link: string;
  key: string;
  icon: string;
  children: any;
}
