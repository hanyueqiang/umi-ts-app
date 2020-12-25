const simpleData1 = {
  // 节点
  nodes: [
    {
      id: 'node1', // String，可选，节点的唯一标识
      shape: 'rect', // 使用 rect 渲染
      x: 40, // Number，必选，节点位置的 x 值
      y: 40, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'hello', // String，节点标签
      // 定制节点样式
      attrs: {
        body: {
          fill: '#2ECC71', // 矩形背景色
          stroke: '#333', // 边框颜色
          strokeWidth: 1, // 边框宽度
          rx: 4, // 相当于border-radius
          ry: 4,
          // strokeDasharray: '10,2', 边框为虚线
        },
        label: {
          text: 'Hello',
          fill: '#333',
          fontSize: 14,
          fontWeight: 'bold',
        },
      },
    },
    {
      id: 'node2', // String，节点的唯一标识
      shape: 'rect', // 使用 ellipse 渲染
      x: 160, // Number，必选，节点位置的 x 值
      y: 180, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'world', // String，节点标签
    },
  ],
  // 边
  edges: [
    {
      source: 'node1', // String，必须，起始节点 id
      target: 'node2', // String，必须，目标节点 id
      // shape: 'double-edge', // shadow-edge 双边
      attrs: {
        line: {
          stroke: '#ccc', // 连线颜色
        },
      },
    },
  ],
};

export { simpleData1 };
