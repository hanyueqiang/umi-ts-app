import React, { useEffect, useRef } from 'react';
import { Graph, Shape, Dom, Addon } from '@antv/x6';
import { simpleData1 } from './tools';

import styles from './index.less';

const { Dnd } = Addon;

const AntvX6Comp = () => {
  const x6Ref = useRef<any>(null);
  const x6Dnd = useRef<any>(null);
  useEffect(() => {
    const graph = new Graph({
      container: document.getElementById('container') as HTMLElement,
      width: 800,
      height: 600,
      snapline: true, // 对齐线
      // 启用框选
      selecting: {
        enabled: true,
        // multiple: true,
        rubberband: true,
        movable: true,
        // showNodeSelectionBox: true,
      },
      // 设置画布背景
      background: {
        color: '#f5f5f5', // 设置画布背景颜色
      },
      // 设置网格
      grid: {
        size: 10, // 网格大小 10px
        visible: true, // 渲染网格背景
        type: 'mesh', // 'dot' | 'fixedDot' | 'mesh'  // 渲染类型
      },
    });
    x6Ref.current = graph;
    const rect = new Shape.Rect({
      id: 'node1',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: 'rect',
      // angle: 30, //旋转角度
      zIndex: 2,
      attrs: {
        body: {
          fill: '#2ECC71', // 背景颜色
          stroke: '#000', // 边框颜色
          rx: 8,
          ry: 8,
        },
        label: {
          text: 'rect', // 文本
          fill: '#333', // 文字颜色
          fontSize: 14, // 文字大小
        },
      },
    });
    const circle = new Shape.Circle({
      id: 'node2',
      x: 280,
      y: 200,
      width: 60,
      height: 60,
      label: 'circle',
      zIndex: 2,
    });
    const edge = new Shape.Edge({
      id: 'edge1',
      source: rect,
      target: circle,
      zIndex: 1,
    });
    graph.addNode(rect);
    graph.addNode(circle);
    graph.addEdge(edge);
    // graph.fromJSON(simpleData1)
    // 画布缩放
    graph.scale(0.75, 0.75);
    // 平移画布
    graph.translate(80, 40);
    x6Dnd.current = new Dnd({
      target: graph,
      scaled: false,
      animation: true,
      validateNode(droppingNode, options) {
        return true;
      },
    });
  }, []);

  const startDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    const type = target.getAttribute('data-type');
    const node =
      type === 'rect'
        ? x6Ref.current.createNode({
            width: 100,
            height: 40,
            attrs: {
              label: {
                text: 'Rect',
                fill: '#6a6c8a',
              },
              body: {
                stroke: '#31d0c6',
                strokeWidth: 2,
              },
            },
          })
        : x6Ref.current.createNode({
            width: 60,
            height: 60,
            shape: 'html',
            html: () => {
              const wrap = document.createElement('div');
              wrap.style.width = '100%';
              wrap.style.height = '100%';
              wrap.style.display = 'flex';
              wrap.style.alignItems = 'center';
              wrap.style.justifyContent = 'center';
              wrap.style.border = '2px solid rgb(49, 208, 198)';
              wrap.style.background = '#fff';
              wrap.style.borderRadius = '100%';
              wrap.innerText = 'Circle';
              return wrap;
            },
          });
    x6Dnd.current.start(node, e.nativeEvent as any);
  };

  return (
    <div className={styles.x6_process}>
      <div className="dnd_wrap">
        <div data-type="rect" className="dnd-rect" onMouseDown={startDrag}>
          Rect
        </div>
        <div data-type="circle" className="dnd-circle" onMouseDown={startDrag}>
          Circle
        </div>
      </div>
      <div id="container"></div>
    </div>
  );
};

export default AntvX6Comp;
