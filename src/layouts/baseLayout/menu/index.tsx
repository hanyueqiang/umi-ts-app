import React, { useState } from 'react';
import { Link, useIntl, connect, Dispatch, useLocation, Loading } from 'umi';
import { ConnectState, GlobalModelState } from '@/models/connect';
import { queryKeysByPath } from '@/utils/utils';

import { Menu } from 'antd';
const { SubMenu, Item } = Menu;

export interface BasicLayoutProps {
  dispatch: Dispatch;
  global: GlobalModelState;
  loading: boolean;
}

const MenuContent: React.FC<BasicLayoutProps> = ({ global, dispatch }) => {
  const [defaultKey, setKeys] = useState('');
  const { menusData } = global;
  const location = useLocation();

  function renderMenu(data: any = []) {
    const rows = Array.isArray(data) ? data : [];
    return rows.map(row => {
      if (row === undefined) return false;
      const { title, link = '', key, children, ...restState } = row;
      if (children && children.length > 0) {
        const subMenu = renderMenu(children);
        return (
          <SubMenu key={key} title={<span>{<span>{title}</span>}</span>}>
            {subMenu}
          </SubMenu>
        );
      } else {
        return (
          <Item key={key} title={title}>
            <Link to={{ pathname: link, state: { ...restState, key } }}>
              {/* <Icon type={icon} /> */}
              <span>{title}</span>
            </Link>
          </Item>
        );
      }
    });
  }

  const { openKey, selectKey } = queryKeysByPath(location.pathname);

  return (
    <Menu
      selectedKeys={[selectKey || defaultKey]}
      defaultOpenKeys={[openKey]}
      mode="inline"
      theme="dark"
      className="progressbar"
    >
      {renderMenu(menusData)}
    </Menu>
  );
};

export default connect(
  ({ global, loading }: { global: GlobalModelState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(MenuContent);
