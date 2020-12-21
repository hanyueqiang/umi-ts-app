import React, { FC } from 'react';
import { Command, Item, ItemPanel } from 'gg-editor';
import { Tooltip, Divider } from 'antd';
import {
  UndoOutlined,
  RedoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  BorderHorizontalOutlined,
  SaveOutlined,
  AndroidOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styles from '../../index.less';

interface ToolbarProps {
  onSave: () => void;
  onResetZoom: () => void;
}

const Toolbar: FC<ToolbarProps> = props => {
  const { onSave, onResetZoom } = props;

  return (
    <div className={styles.toolbar}>
      <Command name={'undo'} className={styles.tool}>
        <Tooltip title="撤销">
          <UndoOutlined />
        </Tooltip>
      </Command>
      <Command name={'redo'} className={styles.tool}>
        <Tooltip title="重做">
          <RedoOutlined />
        </Tooltip>
      </Command>
      <Divider type="vertical" />
      <Command name={'zoomIn'} className={styles.tool}>
        <Tooltip title="放大">
          <ZoomInOutlined />
        </Tooltip>
      </Command>
      <Command name={'zoomOut'} className={styles.tool}>
        <Tooltip title="缩小">
          <ZoomOutOutlined />
        </Tooltip>
      </Command>
      <div className={styles.tool} onClick={onResetZoom}>
        <Tooltip title="实际大小">
          <BorderHorizontalOutlined />
        </Tooltip>
      </div>
      <Divider type="vertical" />
      <div className={styles.tool} onClick={onSave}>
        <Tooltip title="保存">
          <SaveOutlined />
        </Tooltip>
      </div>
      <Divider type="vertical" />
      <ItemPanel className={styles.toolPanel}>
        <Item
          className={styles.toolDrag}
          model={{
            shape: 'robotNode',
            size: [80, 40],
            label: '用户A',
            center: 'topLeft',
          }}
        >
          <AndroidOutlined />
        </Item>
        <Item
          className={styles.toolDrag}
          model={{
            shape: 'userNode',
            size: [80, 40],
            label: '用户B',
            center: 'topLeft',
          }}
        >
          <UserOutlined />
        </Item>
      </ItemPanel>
    </div>
  );
};

export default Toolbar;
