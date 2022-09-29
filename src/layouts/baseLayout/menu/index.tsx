import React, { FC } from 'react';
import { Link, connect, useLocation } from 'umi';
import { Menu } from 'antd';
import { GlobalModelState } from '@/models/connect';
import { queryKeysByPath } from '@/utils/utils';

const { SubMenu, Item } = Menu;

export interface BasicLayoutProps {
  global: GlobalModelState;
}

const MenuContent: FC<BasicLayoutProps> = ({ global }) => {
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
          <SubMenu key={key} title={<span>{title}</span>}>
            {subMenu}
          </SubMenu>
        );
      }
      return (
        <Item key={key} title={title}>
          <Link to={{ pathname: link, state: { ...restState, key } }}>
            {/* <Icon type={icon} /> */}
            <span>{title}</span>
          </Link>
        </Item>
      );
    });
  }

  const { openKey, selectKey } = queryKeysByPath(location.pathname);

  return (
    <Menu
      selectedKeys={[selectKey || '']}
      defaultOpenKeys={[openKey]}
      mode="inline"
      theme="light"
      className="progressbar"
    >
      {renderMenu(menusData)}
    </Menu>
  );
};

export default connect(
  ({ global }: { global: GlobalModelState }) => ({
    global,
  }),
)(MenuContent);
