import React, { useEffect } from 'react';
import { Graph, Shape } from '@antv/x6';
import { simpleData1 } from './tools';

const AntvX6Comp = () => {
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
  }, []);

  return <div id="container"></div>;
};

export default AntvX6Comp;
